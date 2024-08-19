class MeetingDetailsResponse {
    constructor(uuid, id, hostId, type, hostEmail, topic, startTime, endTime, duration, timezone, createdAt, participantsCount) {
        this.uuid = uuid;
        this.id = id;
        this.hostId = hostId;
        this.type = type;
        this.hostEmail = hostEmail;
        this.topic = topic;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.timezone = timezone;
        this.createdAt = createdAt;
        this.participantsCount = participantsCount;
    }
}

module.exports = MeetingDetailsResponse;
