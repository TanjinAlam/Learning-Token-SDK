const MeetingTypes = Object.freeze({
    PRESCHEDULED: 0, // A prescheduled meeting
    INSTANT: 1,      // An instant meeting
    SCHEDULED: 2,    // A scheduled meeting
    RECURRING_NO_FIXED_TIME: 3, // A recurring meeting with no fixed time
    PERSONAL_MEETING_ROOM: 4,   // A personal meeting room
    PAC: 7,                  // A PAC (Personal Audio Conference) meeting
    RECURRING_FIXED_TIME: 8    // A recurring meeting with a fixed time
});

module.exports = MeetingTypes;
