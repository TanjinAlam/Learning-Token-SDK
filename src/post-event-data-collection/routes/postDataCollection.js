require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Response
const MeetingDetailsResponse = require('../responses/MeetingDetailsResponse');
const PastMeetingParticipantsResponse = require('../responses/PastMeetingParticipantsResponse');
const MeetingPollsResponse = require('../responses/MeetingPollsResponse');

// Zoom API Endpoints
const pastMeetingsUrl = process.env.ZOOM_PAST_MEETINGS_ENDPOINT;

// Utility
const Utility = require('../util/utility');
const utility = new Utility();

/**
 * GET endpoint to get Meeting Details
 * Request Param: eventId -- example mtgId: 87648908877
 * Request Headers: Zoom API Access Token
 */
router.get('/past-meeting-details/:meetingId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const meetingId = req.params.meetingId;
    const url = `${pastMeetingsUrl}${meetingId}`;
    
    if (!accessToken) {
        return res.status(400).json({
            message: 'Access token is required.'
        });
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        const meetingDetailsResponse = new MeetingDetailsResponse(
            response.data.uuid,
            response.data.id,
            response.data.host_id,
            utility.getMeetingType(response.data.type),
            response.data.host_email,
            response.data.topic,
            response.data.start_time,
            response.data.end_time,
            response.data.duration,
            utility.getTimezone(response.data.start_time),
            response.data.created_at,
            response.data.participants_count
        );
        
        res.status(response.status).json(meetingDetailsResponse);
    } catch (error) {
        console.error('Error in meeting-details request:', {
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


/**
 * GET endpoint to get Past Meeting Participants
 * Request Param: eventId -- example mtgId: 87648908877
 * Request Headers: Zoom API Access Token
 */
router.get('/past-meeting-participants/:meetingId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const meetingId = req.params.meetingId;
    const url = `${pastMeetingsUrl}${meetingId}/participants`;

    if (!accessToken) {
        return res.status(400).json({
            message: 'Access token is required.'
        });
    }

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        // Assuming response.data.participants is an array
        const pastMeetingParticipants = response.data.participants
        .filter(participant => participant.status==='in_meeting')
        .map(participant => {
            return new PastMeetingParticipantsResponse( 
                participant.name,
                participant.user_email!=='' ? participant.user_email : participant.user_id,
                participant.join_time,
                participant.leave_time,
                participant.duration
            );
        });
        
        // Send the response data back to the client
        res.status(response.status).json(pastMeetingParticipants);
    } catch (error) {
        console.error('Error in meeting-summary request:', {
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

/**
 * GET endpoint to get Post Event Data Collection: Consolidated Past Meeting and Participants Response
 * Request Param: eventId -- example mtgId: 87648908877
 * Request Headers: Zoom API Access Token
 */
router.get('/:eventId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const eventId = req.params.eventId;
    
    if (!accessToken) {
        return res.status(400).json({
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
        const pastMeetingParticipants = meetingParticipantsResponse.data.participants
            .filter(participant => participant.status === 'in_meeting')
            .map(participant => new PastMeetingParticipantsResponse(
                participant.name,
                participant.user_email || "", // can retrieve email if there's meeting registration
                participant.join_time,
                participant.leave_time,
                participant.duration
            ));

        // Get meeting polls
        const polls = new MeetingPollsResponse(meetingPollsResponse.data);

        // Map emails from polls to participants - override if there's no emails available
        if (polls.questions.length > 0) {
            const emailMap = new Map(polls.questions.map(question => [question.name, question.email]));
            
            // Update participants with email from polls if available
            pastMeetingParticipants.forEach(participant => {
                if (emailMap.has(participant.name)) {
                    participant.userEmail = emailMap.get(participant.name);
                }
            });
        }

        // Add participants and polls to the meeting details response
        meetingDetailsResponseData.pastMeetingParticipants = pastMeetingParticipants;
        meetingDetailsResponseData.polls = polls;

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