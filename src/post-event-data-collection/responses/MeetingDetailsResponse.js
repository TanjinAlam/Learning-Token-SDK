class MeetingDetailsResponse {
    constructor(uuid, id, hostId, hostEmail, topic, startTime, duration, timezone, createdAt, meetingInvitees) {
        this.uuid = uuid;
        this.id = id;
        this.hostId = hostId;
        this.hostEmail = hostEmail;
        this.topic = topic;
        this.startTime = startTime;
        this.duration = duration;
        this.timezone = timezone;
        this.createdAt = createdAt;
        this.meetingInvitees = meetingInvitees;
    }
}

module.exports = MeetingDetailsResponse;
