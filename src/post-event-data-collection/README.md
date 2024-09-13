```
Post-event Data Collection using Zoom API
```

### Project Setup ###

``` 
npm install
```

``` 
node app
```

### Sample cURL snippets and Response ###
```
1. GET Event Data Collection: Consolidated Past Meeting and Participants, Polls Response
```

```
curl --location 'http://localhost:3008/post-event-data-collection/82886746452' \
--header 'Access-Token: eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjY4NThlODBmLTQ0YmItNGNjNS04ZGI5LTQ3MzI2YWI5MzhiMiJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiYTIwM2RmMzFhYmFhNGQ3M2UwNmVlODdhOWI5ZWEzMzEiLCJuYmYiOjE3MjYyNjEyMDMsImNvZGUiOiJlWnpVX19IWlJqdVdpTVBlZlQxdmxRSGhsdTltbThXRVkiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI2MjY0ODAzLCJ0eXBlIjozLCJpYXQiOjE3MjYyNjEyMDMsImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.YNzKa26vWGwLxR5fc7LR7JWP28p6XeyNbN1vvlzF6FCWkzrt-08SpIE0SeEqJcHinxjVNKuGFhCmCcneuXiVDg'
```

Sample Response with Polls:
```
{
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
            "name": "LT-AbCdef",
            "userEmail": "alfonsogovela@mac.com",
            "joinTime": "2024-09-13T16:50:09Z",
            "leaveTime": "2024-09-13T17:34:04Z",
            "duration": 2635,
            "polls": []
        },
        {
            "name": "LT-Ciel55",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:04Z",
            "leaveTime": "2024-09-13T17:34:01Z",
            "duration": 2577,
            "polls": []
        },
        {
            "name": "LT-39320A",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:22Z",
            "leaveTime": "2024-09-13T17:19:46Z",
            "duration": 1704,
            "polls": []
        },
        {
            "name": "LT-AbCdef",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:35Z",
            "leaveTime": "2024-09-13T17:33:59Z",
            "duration": 2544,
            "polls": []
        },
        {
            "name": "LT-QSQSQSQ",
            "userEmail": "",
            "joinTime": "2024-09-13T16:54:19Z",
            "leaveTime": "2024-09-13T17:32:28Z",
            "duration": 2289,
            "polls": []
        },
        {
            "name": "Harsh Sinyal",
            "userEmail": "",
            "joinTime": "2024-09-13T17:20:19Z",
            "leaveTime": "2024-09-13T17:22:04Z",
            "duration": 105,
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
}
```

Sample Response without Polls and without Registration:
```
{
    "uuid": "X5/ZjXokQwG7NL9Zqv2/QQ==",
    "id": 87648908877,
    "hostId": "2dNPNZeuSTWSm_mv4mAXag",
    "type": "A recurring meeting with a fixed time.",
    "topic": "Alfonso Govela's Zoom Meeting - Learning Tokens Sync Call",
    "startTime": "2024-08-30T15:59:51Z",
    "endTime": "2024-08-30T17:08:50Z",
    "duration": 69,
    "timezone": "UTC",
    "participantsCount": 12,
    "pastMeetingParticipants": [
        {
            "name": "LT-AbCdef",
            "userEmail": "alfonsogovela@mac.com",
            "joinTime": "2024-09-13T16:50:09Z",
            "leaveTime": "2024-09-13T17:34:04Z",
            "duration": 2635,
            "polls": []
        },
        {
            "name": "LT-Ciel55",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:04Z",
            "leaveTime": "2024-09-13T17:34:01Z",
            "duration": 2577,
            "polls": []
        },
        {
            "name": "LT-39320A",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:22Z",
            "leaveTime": "2024-09-13T17:19:46Z",
            "duration": 1704,
            "polls": []
        },
        {
            "name": "LT-AbCdef",
            "userEmail": "",
            "joinTime": "2024-09-13T16:51:35Z",
            "leaveTime": "2024-09-13T17:33:59Z",
            "duration": 2544,
            "polls": []
        },
        {
            "name": "LT-QSQSQSQ",
            "userEmail": "",
            "joinTime": "2024-09-13T16:54:19Z",
            "leaveTime": "2024-09-13T17:32:28Z",
            "duration": 2289,
            "polls": []
        },
        {
            "name": "Harsh Sinyal",
            "userEmail": "",
            "joinTime": "2024-09-13T17:20:19Z",
            "leaveTime": "2024-09-13T17:22:04Z",
            "duration": 105,
            "polls": []
        }
    ]
}
```

Sample Response without Polls but with Registration:
```
{
    "uuid": "miyS2UyeSnOYXihp1OxZXA==",
    "id": 87444056899,
    "hostId": "2dNPNZeuSTWSm_mv4mAXag",
    "type": "A scheduled meeting.",
    "topic": "My Meeting",
    "startTime": "2024-08-20T20:36:20Z",
    "endTime": "2024-08-20T20:52:01Z",
    "duration": 16,
    "timezone": "UTC",
    "participantsCount": 3,
    "pastMeetingParticipants": [
        {
            "name": "Alfonso Govela",
            "userEmail": "alfonsogovela@mac.com",
            "joinTime": "2024-08-20T20:36:20Z",
            "leaveTime": "2024-08-20T20:52:02Z",
            "duration": 942,
            "polls": []
        },
        {
            "name": "Ciel Recuerdo",
            "userEmail": "cmsrecuerdo@gmail.com",
            "joinTime": "2024-08-20T20:37:38Z",
            "leaveTime": "2024-08-20T20:52:01Z",
            "duration": 863,
            "polls": []
        },
        {
            "name": "Harsh Jain / Sinyal",
            "userEmail": "2021.harsh.jain@ves.ac.in",
            "joinTime": "2024-08-20T20:38:18Z",
            "leaveTime": "2024-08-20T20:52:01Z",
            "duration": 823,
            "polls": []
        }
    ]
}
```