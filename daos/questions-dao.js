const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (questionId) => questionsModel.findById(questionId)
const findQuestionsForQuiz = (quizId) => questionsModel.findById(quizId)
    .populate('questions').then(quiz => quiz.questions)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}