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
curl --location 'http://localhost:3008/post-event-data-collection/87648908877' \
--header 'Access-Token: eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjQ0MGEyYTQzLWNjZmQtNDU5ZC05NWE5LTY2OGQ4NGNkYzc4MyJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiIyZE5QTlpldVNUV1NtX212NG1BWGFnIiwidmVyIjo5LCJhdWlkIjoiZGUxOWQ0ZTYyOGE3NjY3Y2VkYTMwZDlkNmY5YjMyMTEiLCJuYmYiOjE3MjM5MjQzNjksImNvZGUiOiJWNWpUT0taY1RsMmN2T3RXWXRucnNnV21EbmRDM1QzWEQiLCJpc3MiOiJ6bTpjaWQ6YlJCZ0JTbEhSVE84aTdZUEZjd0JmdyIsImdubyI6MCwiZXhwIjoxNzIzOTI3OTY5LCJ0eXBlIjozLCJpYXQiOjE3MjM5MjQzNjksImFpZCI6ImpoRExrS2UtUkpxdzF2RDQ3dXdiX3cifQ.Aj8W8YXs-oqfQrc_eGV9Nh6nJefn6Of5D4Qc4knQa3e8ihw8N-K0kw3qCWMoHw5log5kLZAEIHHOeSA9UDUfHg'
```

Sample Response:
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
            "userEmail": "33556480",
            "joinTime": "2024-08-16T16:01:16Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 3371
        },
        {
            "name": "Tanjin",
            "userEmail": "33558528",
            "joinTime": "2024-08-16T16:01:59Z",
            "leaveTime": "2024-08-16T16:57:26Z",
            "duration": 3327
        },
        {
            "name": "Harsh Sinyal",
            "userEmail": "50333696",
            "joinTime": "2024-08-16T16:04:31Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 3176
        },
        {
            "name": "Ciel",
            "userEmail": "67110912",
            "joinTime": "2024-08-16T16:07:53Z",
            "leaveTime": "2024-08-16T16:57:25Z",
            "duration": 2972
        },
        {
            "name": "Fateh",
            "userEmail": "33560576",
            "joinTime": "2024-08-16T16:07:57Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 2970
        },
        {
            "name": "Weber Dubois",
            "userEmail": "83888128",
            "joinTime": "2024-08-16T16:08:03Z",
            "leaveTime": "2024-08-16T16:57:28Z",
            "duration": 2965
        },
        {
            "name": "Khairul Hasan",
            "userEmail": "33562624",
            "joinTime": "2024-08-16T16:15:44Z",
            "leaveTime": "2024-08-16T16:57:27Z",
            "duration": 2503
        }
    ]
}
```