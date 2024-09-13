require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Response
const MeetingDetailsResponse = require('../responses/MeetingDetailsResponse');
const PastMeetingParticipantsResponse = require('../responses/PastMeetingParticipantsResponse');

// Zoom API Endpoints
const pastMeetingsUrl = process.env.ZOOM_PAST_MEETINGS_ENDPOINT;

// Utility
const Utility = require('../util/utility');
const utility = new Utility();

/**
 * GET endpoint to get Post Event Data Collection: Consolidated Past Meeting and Participants, Polls Response
 * Request Param: eventId -- example mtgId: 87648908877
 * Request Headers: Zoom API Access Token
 */
router.get('/:eventId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const eventId = req.params.eventId;

    if (!accessToken) {
        return res.status(401).json({
            message: 'Access token is required.'
        });
    }

    try {
        // Zoom API endpoints
        const meetingDetailsUrl = `${pastMeetingsUrl}${eventId}`;
        const meetingParticipantsUrl = `${pastMeetingsUrl}${eventId}/participants`;
        const meetingPollsUrl = `${pastMeetingsUrl}${eventId}/polls`;

        // Fetch past meeting details and participants in parallel
        const [meetingDetailsResponse, meetingParticipantsResponse, meetingPollsResponse] = await Promise.all([
            axios.get(meetingDetailsUrl, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            }),
            axios.get(meetingParticipantsUrl, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            }),
            axios.get(meetingPollsUrl, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            })
        ]);

        // Get past meeting details
        const meetingDetailsResponseData = new MeetingDetailsResponse(
            meetingDetailsResponse.data.uuid,
            meetingDetailsResponse.data.id,
            meetingDetailsResponse.data.host_id,
            utility.getMeetingType(meetingDetailsResponse.data.type),
            meetingDetailsResponse.data.host_email,
            meetingDetailsResponse.data.topic,
            meetingDetailsResponse.data.start_time,
            meetingDetailsResponse.data.end_time,
            meetingDetailsResponse.data.duration,
            utility.getTimezone(meetingDetailsResponse.data.start_time),
            meetingDetailsResponse.data.created_at,
            meetingDetailsResponse.data.participants_count
        );

        // Get past meeting participants
        const participantNames = new Set(); // ensure there's no duplicates
        const pastMeetingParticipants = meetingParticipantsResponse.data.participants
                .filter(participant => participant.status === 'in_meeting')
                .filter(participant => {
                    if (participantNames.has(participant.name)) {
                        return false;
                    }
                    participantNames.add(participant.name);
                    return true;
                })
                .map(participant => new PastMeetingParticipantsResponse(
                    participant.name,
                    participant.user_email || "", // can retrieve email if there's meeting registration
                    participant.join_time,
                    participant.leave_time,
                    participant.duration
                ));
        
        // Map meeting polls for each participant who answered
        pastMeetingParticipants.forEach(participant => {
            const participantPolls = meetingPollsResponse.data.questions.filter(question => question.name === participant.name);
            participant.polls = participantPolls.map(question => ({
                email: question.email,
                questionDetails: question.question_details
            }));
        });

        // Add participants, polls to the meeting details response
        meetingDetailsResponseData.pastMeetingParticipants = pastMeetingParticipants;

        res.status(200).json(meetingDetailsResponseData);
    } catch (error) {
        console.error('Error in consolidated request:', {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data
        });

        // Handle errors
        if (error.response) {
            res.status(error.response.status).json({
                message: error.response.statusText || 'An error occurred.',
                details: error.response.data
            });
        } else if (error.request) {
            res.status(500).json({
                message: 'No response received from the server.',
                details: error.request
            });
        } else {
            // Something happened in setting up the request that triggered an Error
            res.status(500).json({
                message: error.message || 'An unexpected error occurred.'
            });
        }
    }
});


module.exports = router;