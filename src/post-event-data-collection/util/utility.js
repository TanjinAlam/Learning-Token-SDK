const { DateTime } = require('luxon');
const MeetingTypesEnum = require('../enums/meetingTypes');

class Utility {

    /**
     * Get Meeting Type
     * @param {integer} type 
     * @returns Zoom Meeting Type
     */
    getMeetingType(type) {
        switch (type) {
            case MeetingTypesEnum.PRESCHEDULED:
                return 'A prescheduled meeting.';
            case MeetingTypesEnum.INSTANT:
                return 'An instant meeting.';
            case MeetingTypesEnum.SCHEDULED:
                return 'A scheduled meeting.';
            case MeetingTypesEnum.RECURRING_NO_FIXED_TIME:
                return 'A recurring meeting with no fixed time.';
            case MeetingTypesEnum.PERSONAL_MEETING_ROOM:
                return 'A personal meeting room.';
            case MeetingTypesEnum.PAC:
                return 'A PAC (Personal Audio Conference) meeting.';
            case MeetingTypesEnum.RECURRING_FIXED_TIME:
                return 'A recurring meeting with a fixed time.';
            default:
                return 'Unknown meeting type.';
        }
    }

    /**
     * Get local timezone
     * @param {UTC String} dateString 
     * @returns timezone
     */
    getTimezone(dateString) {
        // Parse the date string in UTC
        const dt = DateTime.fromISO(dateString, { zone: 'utc' });
        
        // Convert to local time
        const localTime = dt.toLocal().toISO();
        
        // Get the local timezone name
        const timezone = dt.zoneName;
    
        // Display results
        console.log(`Local Time: ${localTime}`);
        console.log(`Local Timezone: ${timezone}`);

        return timezone;
    }

    /**
     * Format string date to readable format
     * @param {*} dateString 
     * @param {*} timezone 
     * @returns formattedDate
     */
    formatDate(dateString, timezone = 'local') {
        // Parse the date string in UTC
        const dt = DateTime.fromISO(dateString, { zone: 'utc' });

        // Convert to the specified timezone or local timezone
        const formattedDate = timezone === 'local'
            ? dt.toLocal().toLocaleString(DateTime.DATETIME_FULL)
            : dt.setZone(timezone).toLocaleString(DateTime.DATETIME_FULL);

        return formattedDate;
    }
}

module.exports = Utility;