const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuizzes = () => quizzesModel.find()

const findQuizById = () => quizzesModel.findById()

module.exports = {findAllQuizzes, findQuizById}