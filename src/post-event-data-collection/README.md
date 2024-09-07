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
--header 'Access-Token: eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImUzZWYwYTJmLTgzYzMtNDk1ZS04ZGQ3LTdhYTlhYTA4ODFjYiJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiZGUxOWQ0ZTYyOGE3NjY3Y2VkYTMwZDlkNmY5YjMyMTEiLCJuYmYiOjE3MjQyODE2NTksImNvZGUiOiJlNS1vUkV5cVJhaTdKeFBLRlVXU293Y3h2ZnM1UGU2MHYiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI0Mjg1MjU5LCJ0eXBlIjozLCJpYXQiOjE3MjQyODE2NTksImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.ZC7vzjF2Qd2ufB1RMY5Ftdevbnq0pbddJZydeL5BhWAGhi-f3nvIJ-40Uf9Qv6nhta7E-6aoju2pjws09TwYaA'
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
            "name": "Alfonso Govela",
            "userEmail": "alfonsogovela@mac.com",
            "joinTime": "2024-08-20T20:12:54Z",
            "leaveTime": "2024-08-20T20:36:13Z",
            "duration": 1399
        },
        {
            "name": "Ciel",
            "userEmail": "cmsrecuerdo@gmail.com",
            "joinTime": "2024-08-20T20:14:36Z",
            "leaveTime": "2024-08-20T20:35:52Z",
            "duration": 1276
        },
        {
            "name": "Harsh Sinyal",
            "userEmail": "harsh.sinyal@gmail.com",
            "joinTime": "2024-08-20T20:15:46Z",
            "leaveTime": "2024-08-20T20:35:52Z",
            "duration": 1206
        }
    ],
    "polls": {
        "questions": [
            {
                "name": "Harsh Sinyal",
                "email": "harsh.sinyal@gmail.com",
                "questionDetails": [
                    {
                        "question": "Do you like Learning Tokens",
                        "answer": "Yes",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    },
                    {
                        "question": "Where would you like to apply them",
                        "answer": "MOOCs",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    },
                    {
                        "question": "Please match type of token with description of its value",
                        "answer": "Attendance Token:The value of showing off;Score for Learners Token:The value of acquiring a skill;Help for Learners Token:The value of collaboration and support;Score for Instructors Token:The value of teaching performance",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    },
                    {
                        "question": "What are the main components of Learning Tokens",
                        "answer": "Granularity;Scoring Guides;Registry of Trust;Skill Wallets",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    },
                    {
                        "question": "Would Learning Tokens be easily adopted",
                        "answer": "9",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    },
                    {
                        "question": "What do you prefer of Learning Tokens (1 = mis, 5 = max)",
                        "answer": "Granularity:4;Fields of Knowledge:4;Taxonomy of Skills:4",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:36:15"
                    }
                ],
                "firstName": "Harsh Sinyal"
            },
            {
                "name": "Ciel",
                "email": "cmsrecuerdo@gmail.com",
                "questionDetails": [
                    {
                        "question": "Do you like Learning Tokens",
                        "answer": "Yes",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    },
                    {
                        "question": "Where would you like to apply them",
                        "answer": "Test",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    },
                    {
                        "question": "Please match type of token with description of its value",
                        "answer": "Attendance Token:The value of acquiring a skill;Score for Learners Token:The value of acquiring a skill;Help for Learners Token:The value of acquiring a skill;Score for Instructors Token:The value of teaching performance",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    },
                    {
                        "question": "What are the main components of Learning Tokens",
                        "answer": "Granularity;Scoring Guides;Registry of Trust;DIDs;Skill Wallets",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    },
                    {
                        "question": "Would Learning Tokens be easily adopted",
                        "answer": "8",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    },
                    {
                        "question": "What do you prefer of Learning Tokens (1 = mis, 5 = max)",
                        "answer": "Granularity:4;Fields of Knowledge:4;Taxonomy of Skills:4",
                        "pollingId": "3Ja5eQIUTnWa_cwd0gpKSw",
                        "dateTime": "2024-08-20 20:17:26"
                    }
                ],
                "firstName": "Ciel"
            }
        ]
    }
}
```

Sample Response without Polls and Registration:
```
{
    "uuid": "ujtIF2QERpy36CXQeDC4iA==",
    "id": 87648908877,
    "hostId": "2dNPNZeuSTWSm_mv4mAXag",
    "type": "A recurring meeting with a fixed time.",
    "topic": "Alfonso Govela's Zoom Meeting - Learning Tokens Sync Call",
    "startTime": "2024-08-16T15:58:31Z",
    "endTime": "2024-08-16T16:57:27Z",
    "duration": 59,
    "timezone": "UTC",
    "participantsCount": 8,
    "pastMeetingParticipants": [
        {
            "name": "Alfonso Govela",
            "userEmail": "alfonsogovela@mac.com",
            "joinTime": "2024-08-16T15:58:31Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 3536
        },
        {
            "name": "Khairul Hasan",
            "userEmail": "",
            "joinTime": "2024-08-16T16:01:16Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 3371
        },
        {
            "name": "Tanjin",
            "userEmail": "",
            "joinTime": "2024-08-16T16:01:59Z",
            "leaveTime": "2024-08-16T16:57:26Z",
            "duration": 3327
        },
        {
            "name": "Harsh Sinyal",
            "userEmail": "",
            "joinTime": "2024-08-16T16:04:31Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 3176
        },
        {
            "name": "Ciel",
            "userEmail": "",
            "joinTime": "2024-08-16T16:07:53Z",
            "leaveTime": "2024-08-16T16:57:25Z",
            "duration": 2972
        },
        {
            "name": "Fateh",
            "userEmail": "",
            "joinTime": "2024-08-16T16:07:57Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 2970
        },
        {
            "name": "Weber Dubois",
            "userEmail": "",
            "joinTime": "2024-08-16T16:08:03Z",
            "leaveTime": "2024-08-16T16:57:28Z",
            "duration": 2965
        },
        {
            "name": "Khairul Hasan",
            "userEmail": "",
            "joinTime": "2024-08-16T16:15:44Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 2503
        }
    ],
    "polls": {
        "questions": []
    }
}
```

Sample Response with Registration but without Polls:
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
            "duration": 942
        },
        {
            "name": "Ciel Recuerdo",
            "userEmail": "cmsrecuerdo@gmail.com",
            "joinTime": "2024-08-20T20:37:38Z",
            "leaveTime": "2024-08-20T20:52:01Z",
            "duration": 863
        },
        {
            "name": "Harsh Jain / Sinyal",
            "userEmail": "2021.harsh.jain@ves.ac.in",
            "joinTime": "2024-08-20T20:38:18Z",
            "leaveTime": "2024-08-20T20:52:01Z",
            "duration": 823
        }
    ],
    "polls": {
        "questions": []
    }
}
```

```
2. GET Past Meeting Details
```

```
curl --location 'http://localhost:3008/post-event-data-collection/past-meeting-details/82886746452' \
--header 'Access-Token: eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImU3NGFkNzA3LWQ2N2UtNDFjMy1hY2FlLTNhYmFhMThjNmQ0OCJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiNGRkOWIyZjQ2ODZjOGI5N2Y4ZmZmZWE1OGNmZGRhZTgiLCJuYmYiOjE3MjUwMzY5OTAsImNvZGUiOiI5cTctbVIwZFJRaWp6a2h3ZzgxQ29BNGViQ3hQYkF3OGoiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI1MDQwNTkwLCJ0eXBlIjozLCJpYXQiOjE3MjUwMzY5OTAsImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.jlfIEkhYjqsvfTmMzow_6qaN8Sazr8gQXWrsbZSHRaRA7TY_2Tfoto0ETXiERFFzzUUmwMD0NGZJKWw4bzLj-Q'
```

sample Response:
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
    "participantsCount": 3
}
```

```
3. GET Past Meeting Participants
```

```
curl --location 'http://localhost:3008/post-event-data-collection/past-meeting-participants/82886746452' \
--header 'Access-Token: eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImU3NGFkNzA3LWQ2N2UtNDFjMy1hY2FlLTNhYmFhMThjNmQ0OCJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiNGRkOWIyZjQ2ODZjOGI5N2Y4ZmZmZWE1OGNmZGRhZTgiLCJuYmYiOjE3MjUwMzY5OTAsImNvZGUiOiI5cTctbVIwZFJRaWp6a2h3ZzgxQ29BNGViQ3hQYkF3OGoiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzI1MDQwNTkwLCJ0eXBlIjozLCJpYXQiOjE3MjUwMzY5OTAsImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.jlfIEkhYjqsvfTmMzow_6qaN8Sazr8gQXWrsbZSHRaRA7TY_2Tfoto0ETXiERFFzzUUmwMD0NGZJKWw4bzLj-Q'
```

sample Response:
```
[
    {
        "name": "Alfonso Govela",
        "userEmail": "alfonsogovela@mac.com",
        "joinTime": "2024-08-20T20:12:54Z",
        "leaveTime": "2024-08-20T20:36:13Z",
        "duration": 1399
    },
    {
        "name": "Ciel",
        "userEmail": "33556480",
        "joinTime": "2024-08-20T20:14:36Z",
        "leaveTime": "2024-08-20T20:35:52Z",
        "duration": 1276
    },
    {
        "name": "Harsh Sinyal",
        "userEmail": "50333696",
        "joinTime": "2024-08-20T20:15:46Z",
        "leaveTime": "2024-08-20T20:35:52Z",
        "duration": 1206
    }
]
```