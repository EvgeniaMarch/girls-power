require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;
const authApiRouter = require('./routes/api/auth.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api/auth', authApiRouter);

try {
  app.listen(PORT, () => {
    console.log(`Арни мчит на ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
}
