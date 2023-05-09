const mainRouter = require('express').Router();

const { Question } = require('../../db/models');
const { User } = require('../../db/models');

mainRouter.get('/', (req, res) => {
  console.log('route get', req.session);
  Question.findAll()
    .then((allQuestions) => res.json(allQuestions))
    .catch((error) => res.status(500).json(error));
});

// mainRouter.put('/', (req, res) => {
//   User.findOne({ where: { id: req.session.userId } });
// });

mainRouter.put('/', async (req, res) => {
  try {
    const { score } = req.body;
    console.log(req.session, 'req.session.userId');
    console.log(score, 'score');
    const result = await User.findOne({
      where: { id: req.session.userId },
    });
    if (result) {
      result.score = score;

      await result.save();
      console.log(result.score, '<----');
    } else {
      res.json({ success: false, message: 'nope' });
    }
  } catch ({ message }) {
    res.json({ success: false, message: 'cant edit' });
  }
});

module.exports = mainRouter;

// adsApiRouter.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, image, price } = req.body;

//     // достаём объявление из БД
//     const ad = await Ad.findOne({
//       where: {
//         id,
//         // Проверка на IDOR
//         user_id: req.session.userId,
//       },
//     });

//     // изменить и сохранить изменения в БД
//     ad.title = title;
//     ad.image = image;
//     ad.price = Number(price);
//     await ad.save();

//     res.json({
//       success: true,
//       html: res.renderComponent(AdView, { ad, showButtons: true }, { doctype: false }),
//     });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });
