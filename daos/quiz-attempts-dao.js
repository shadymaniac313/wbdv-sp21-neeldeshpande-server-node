const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectAnswers = 0
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectAnswers++ : numberOfCorrectAnswers)
    return 100 * numberOfCorrectAnswers / questions.length
}

const findAttemptsForQuiz = (quizId) => quizAttemptsModel.find({quiz: quizId}).populate('quiz', 'title _id')

const
    createAttempt = (quizId, attempt) =>
        quizAttemptsModel.create({
            quiz: quizId,
            answers: attempt,
            score: scoreQuiz(attempt)
        })


module.exports = {createAttempt, findAttemptsForQuiz}