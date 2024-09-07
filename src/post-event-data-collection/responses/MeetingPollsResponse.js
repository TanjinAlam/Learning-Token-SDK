class MeetingPollsResponse {
    constructor(response) {
        // Check if there's a poll based on questions
        if (Array.isArray(response.questions) && response.questions.length > 0) {
            this.questions = response.questions.map(question => ({
                name: question.name,
                email: question.email,
                questionDetails: question.question_details.map(detail => ({
                    question: detail.question,
                    answer: detail.answer,
                    pollingId: detail.polling_id,
                    dateTime: detail.date_time
                })),
                firstName: question.first_name
            }));
        } else {
            this.questions = [];
        }
    }
}

module.exports = MeetingPollsResponse;
