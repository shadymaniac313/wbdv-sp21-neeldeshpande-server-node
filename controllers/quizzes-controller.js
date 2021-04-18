const quizzesService = require('../services/quiz-service')

module.exports = function (app) {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))

    app.get('/api/quizzes/:quizId', (req, res) =>
        quizzesService.findQuizById(req.params['quizId'])
            .then(quiz => res.json(quiz)))
}
