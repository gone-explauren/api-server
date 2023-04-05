'use strict'

const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./middleware/logger.js')
const clothesRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

const error404 = require('./error-handlers/404.js')
const error500 = require('./error-handlers/500.js')

app.use(cors());
app.use(express.json());

app.use(logger);
app.use('/clothes', clothesRouter);
app.use('/food', foodRouter);

app.use('*', error404);
app.use(error500)

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  }),
};