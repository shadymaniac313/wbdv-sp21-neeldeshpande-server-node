const questionsService = require('../services/questions-service')

module.exports = function(app) {
    app.get('/api/quizzes/:quizId/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['quizId'])
            .then(questions => res.json(questions)))

    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))

    app.get('/api/questions/:questionId', (req, res) =>
        questionsService.findQuestionById(req.params['questionId'])
            .then(question => res.json(question)))
}
