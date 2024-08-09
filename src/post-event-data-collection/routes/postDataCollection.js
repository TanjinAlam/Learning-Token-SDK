require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Response
const MeetingDetailsResponse = require('../responses/MeetingDetailsResponse');
const MeetingSummaryResponse = require('../responses/MeetingSummaryResponse');
const PastMeetingParticipantsResponse = require('../responses/PastMeetingParticipantsResponse');

// Zoom API Endpoints
const meetingDetailsUrl = process.env.ZOOM_MEETING_DETAILS_ENDPOINT;
const pastMeetingParticipantsUrl = process.env.ZOOM_PAST_MEETING_PARTICIPANTS_ENDPOINT;

// GET endpoint to get Meeting Details - example mtgId: 71312087883
router.get('/meeting-details/:meetingId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const meetingId = req.params.meetingId;
    const url = `${meetingDetailsUrl}${meetingId}`;

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
            response.data.host_email,
            response.data.topic,
            response.data.start_time,
            response.data.duration,
            response.data.timezone,
            response.data.created_at,
            response.data.meeting_invitees
        );
        
        // Send the response data back to the client
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

// PENDING TESTING ONCE PAID ACCOUNT IS AVAILABLE
router.get('/meeting-summary/:meetingId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const meetingId = req.params.meetingId;
    
    const url = `${meetingDetailsUrl}${meetingId}/meeting_summary`;
    console.log('meetingSummaryUrl: ', url);

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

        const meetingSummaryResponse = new MeetingSummaryResponse(
            response.data.meeting_host_id,
            response.data.meeting_host_email,
            response.data.meeting_uuid,
            response.data.meeting_id,
            response.data.meeting_topic,
            response.data.meeting_start_time,
            response.data.meeting_end_time,
            response.data.meeting_start_time,
            response.data.summary_end_time,
            response.data.summary_overview,
            response.data.summary_details
        );
        
        // Send the response data back to the client
        res.status(response.status).json(meetingSummaryResponse);
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

// PENDING TESTING ONCE PAID ACCOUNT IS AVAILABLE
router.get('/past-meeting-participants/:meetingId', async (req, res) => {
    const accessToken = req.headers['access-token'];
    const meetingId = req.params.meetingId;
    console.log('pastMeetingParticipantsUrl: ', pastMeetingParticipantsUrl);
    
    const url = `${pastMeetingParticipantsUrl}${meetingId}/participants`;

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
        const pastMeetingParticipants = response.data.participants.map(participant => {
            return new PastMeetingParticipantsResponse( 
                participant.name,
                participant.user_email,
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

module.exports = router;