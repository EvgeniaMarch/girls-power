require('dotenv').config();
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT ?? 5000;
const authApiRouter = require('./routes/api/auth.routes');
const mainRouter = require('./routes/view/main.routes');
const serverConfig = require('./config/serverConfig');
const sessionConfig = require('./config/session');

serverConfig(app);

app.use(session(sessionConfig));
app.use('/api/auth', authApiRouter);
app.use('/api/main', mainRouter);

try {
  app.listen(PORT, () => {
    console.log(`Арни мчит на ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
