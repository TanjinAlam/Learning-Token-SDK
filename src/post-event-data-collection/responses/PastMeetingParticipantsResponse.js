class PastMeetingParticipantsResponse {
    constructor(name, userEmail, joinTime, leaveTime, duration) {
        // Check if name contains comma then extract the LT username
        const index = name.indexOf(',');
        if (index !== -1) {
            name = name.substring(index + 1).trim();
        }

        this.name = name;
        this.userEmail = userEmail;
        this.joinTime = joinTime;
        this.leaveTime = leaveTime;
        this.duration = duration;
    }
}

module.exports = PastMeetingParticipantsResponse;
