class PastMeetingParticipantsResponse {
    constructor(name, userEmail, joinTime, leaveTime, duration) {
        this.name = name;
        this.userEmail = userEmail;
        this.joinTime = joinTime;
        this.leaveTime = leaveTime;
        this.duration = duration;
    }
}

module.exports = PastMeetingParticipantsResponse;
