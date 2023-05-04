const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  const { login, email, password, password2 } = req.body;

  try {
    if (login && email && password && password2) {
      if (password !== password2) {
        res
          .status(403)
          .json({ success: false, message: 'Пароли не совпадают' });
      }

      const existingUser = await User.findOne({ where: { login } });

      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Пользователь с таким логином уже существует',
        });
      }

      const existingEmail = await User.findOne({ where: { email } });

      if (existingEmail) {
        res.status(409).json({
          success: false,
          message:
            'Пользователь с таким адресом электронной почты уже существует',
        });
      }

      if (!existingEmail && !existingUser && password === password2) {
        const user = await User.create({
          login,
          email,
          password: await bcrypt.hash(password, 10),
        });
        req.session.userId = user.id;
        res.status(201).json({ user });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Непредвиденная ошибка сервера. Попробуйте позже',
    });
  }
});

authApiRouter.post('/login', async (req, res) => {
  const { login, password } = req.body;

  const user = await User.findOne({ where: { login } });

  try {
    if (user && password) {
      if (user && (await bcrypt.compare(password, user.password))) {
        const existingUser = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userId = existingUser.id;
        res.status(201).json(existingUser);
      }

      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.json({
          success: false,
          message: 'Нет такого пользователя, либо пароль не соответствует',
        });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

authApiRouter.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

authApiRouter.get('/checkUser', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json(user);
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = authApiRouter;
