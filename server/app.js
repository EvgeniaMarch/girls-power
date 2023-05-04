require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;
const authApiRouter = require('./routes/api/auth.routes');
const mainRouter = require('./routes/view/main.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api/auth', authApiRouter);
app.use('/api/main', mainRouter);

try {
  app.listen(PORT, () => {
    console.log(`Арни мчит на ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
