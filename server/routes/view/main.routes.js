const mainRouter = require('express').Router();

const { Question } = require('../../db/models');

mainRouter.get('/', (req, res) => {
  Question.findAll()
    .then((allQuestions) => res.json(allQuestions))
    .catch((error) => res.status(500).json(error));
});

module.exports = mainRouter;
