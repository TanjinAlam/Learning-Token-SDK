
Install the necessary packages
```
npm install -g typescript ts-node @types/node @types/express express
```

To run this server, you can use the following command in your terminal
```
ts-node generic-data.ts
```

Excepted Output for the meeting ID :
```
{
  "meetingEventId": "event003",
  "attendees": [
    {
      "name": "learner4",
      "email": "learner4@getairmail.com",
      "joinTime": "2024-10-29T10:30:00.000Z",
      "leaveTime": "2024-10-29T11:30:00.000Z"
    },
    {
      "name": "learner5",
      "email": "learner5@chapsmail.com",
      "joinTime": "2024-10-29T12:00:00.000Z",
      "leaveTime": "2024-10-29T13:00:00.000Z"
    }
  ]
}
```
