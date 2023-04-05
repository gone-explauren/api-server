'use strict';

require('dotenv').config();
const { sequelize } = require('./src/models/index.js');
const server = require('./src/server');

const PORT = process.env.PORT;

sequelize.sync()
.then(() => {
server.start(PORT);
}).catch(err => {
	console.log('SQL connection error: ', err)
})