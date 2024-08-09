class MeetingSummaryResponse {
    constructor(meetingHostId, meetingHostEmail, meetingUuid, meetingId, meetingTopic, meetingStartTime,
        meetingEndTime, summaryStartTime, summaryEndTime, summaryOverview, summaryDetails
    ) {
        this.meetingHostId = meetingHostId;
        this.meetingHostEmail = meetingHostEmail;
        this.meetingUuid = meetingUuid;
        this.meetingId = meetingId;
        this.meetingTopic = meetingTopic;
        this.meetingStartTime = meetingStartTime;
        this.meetingEndTime = meetingEndTime;
        this.summaryStartTime = summaryStartTime;
        this.summaryEndTime = summaryEndTime;
        this.summaryOverview = summaryOverview;
        this.summaryDetails = summaryDetails;
    }
}

module.exports = MeetingSummaryResponse;
