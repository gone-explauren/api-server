'use strict'

const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./middleware/logger.js')
const roomRouter = require('./routes/rooms.js');
const plantRouter = require('./routes/plants.js');

const error404 = require('./error-handlers/404.js')
const error500 = require('./error-handlers/500.js')

app.use(cors());
app.use(express.json());

app.use(logger);
app.use('/room', roomRouter);
app.use('/plant', plantRouter);

app.use('*', error404);
app.use(error500)

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  }),
};