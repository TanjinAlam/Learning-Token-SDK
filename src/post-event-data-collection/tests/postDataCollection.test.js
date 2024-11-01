const request = require('supertest');
const express = require('express');
const app = express();

const router = require('../routes/postDataCollection');
app.use('/post-event-data-collection', router);

describe('GET /post-event-data-collection/:eventId', () => {
    const mockEventId = '82886746452'; // test data: meeting with polls but without registration
    // access token manually generated using POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=
    const mockAccessToken = 'eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjY4NThlODBmLTQ0YmItNGNjNS04ZGI5LTQ3MzI2YWI5MzhiMiJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiYTIwM2RmMzFhYmFhNGQ3M2UwNmVlODdhOWI5ZWEzMzEiLCJuYmYiOjE3MjYyNjEyMDMsImNvZGUiOiJlWnpVX19IWlJqdVdpTVBlZlQxdmxRSGhsdTltbThXRVkiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI2MjY0ODAzLCJ0eXBlIjozLCJpYXQiOjE3MjYyNjEyMDMsImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.YNzKa26vWGwLxR5fc7LR7JWP28p6XeyNbN1vvlzF6FCWkzrt-08SpIE0SeEqJcHinxjVNKuGFhCmCcneuXiVDg';

    // Hard-coded mock response
    const mockResponse = {
        "uuid": "T4rUx0HTTa+KHMpHuy1R2Q==",
        "id": 82886746452,
        "hostId": "2dNPNZeuSTWSm_mv4mAXag",
        "type": "A scheduled meeting.",
        "topic": "Alfonso Govela's Zoom Meeting",
        "startTime": "2024-08-20T20:12:54Z",
        "endTime": "2024-08-20T20:36:13Z",
        "duration": 24,
        "timezone": "UTC",
        "participantsCount": 3,
        "pastMeetingParticipants": [
            {
                "name": "Alfonso Govela",
                "userEmail": "alfonsogovela@mac.com",
                "joinTime": "2024-08-20T20:12:54Z",
                "leaveTime": "2024-08-20T20:36:13Z",
                "duration": 1399,
                "polls": []
            },
            {
                "name": "Ciel",
                "userEmail": "",
                "joinTime": "2024-08-20T20:14:36Z",
                "leaveTime": "2024-08-20T20:35:52Z",
                "duration": 1276,
                "polls": [
                    {
                        "email": "cmsrecuerdo@gmail.com",
                        "questionDetails": [
                            {
                                "question": "Do you like Learning Tokens",
                                "answer": "Yes",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            },
                            {
                                "question": "Where would you like to apply them",
                                "answer": "Test",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            },
                            {
                                "question": "Please match type of token with description of its value",
                                "answer": "Attendance Token:The value of acquiring a skill;Score for Learners Token:The value of acquiring a skill;Help for Learners Token:The value of acquiring a skill;Score for Instructors Token:The value of teaching performance",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            },
                            {
                                "question": "What are the main components of Learning Tokens",
                                "answer": "Granularity;Scoring Guides;Registry of Trust;DIDs;Skill Wallets",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            },
                            {
                                "question": "Would Learning Tokens be easily adopted",
                                "answer": "8",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            },
                            {
                                "question": "What do you prefer of Learning Tokens (1 = mis, 5 = max)",
                                "answer": "Granularity:4;Fields of Knowledge:4;Taxonomy of Skills:4",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:17:26"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Harsh Sinyal",
                "userEmail": "",
                "joinTime": "2024-08-20T20:15:46Z",
                "leaveTime": "2024-08-20T20:35:52Z",
                "duration": 1206,
                "polls": [
                    {
                        "email": "harsh.sinyal@gmail.com",
                        "questionDetails": [
                            {
                                "question": "Do you like Learning Tokens",
                                "answer": "Yes",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            },
                            {
                                "question": "Where would you like to apply them",
                                "answer": "MOOCs",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            },
                            {
                                "question": "Please match type of token with description of its value",
                                "answer": "Attendance Token:The value of showing off;Score for Learners Token:The value of acquiring a skill;Help for Learners Token:The value of collaboration and support;Score for Instructors Token:The value of teaching performance",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            },
                            {
                                "question": "What are the main components of Learning Tokens",
                                "answer": "Granularity;Scoring Guides;Registry of Trust;Skill Wallets",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            },
                            {
                                "question": "Would Learning Tokens be easily adopted",
                                "answer": "9",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            },
                            {
                                "question": "What do you prefer of Learning Tokens (1 = mis, 5 = max)",
                                "answer": "Granularity:4;Fields of Knowledge:4;Taxonomy of Skills:4",
                                "polling_id": "3Ja5eQIUTnWa_cwd0gpKSw",
                                "date_time": "2024-08-20 20:36:15"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    it('should return zoom past meeting details with participants and polls', async () => {
        const response = await request(app)
            .get(`/post-event-data-collection/${mockEventId}`)
            .set('Access-Token', mockAccessToken);

        if(response.status === 200) {
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockResponse);
        } else {
            expect(response.status).toBe(401);
        }
    });

    it('should return error if access token is missing', async () => {
        const response = await request(app)
            .get(`/post-event-data-collection/${mockEventId}`);

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Access token is required.');
    });
});