'use strict'
// barrel file

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const SQL_URL = process.env.SQUL_UL || "sqlite:memory:";
// sqlite:memory: will save the data to memory
// sqlite::memory: (with two columns between words) will not save the data, and it will be deleted when the server is restarted

// using Sequelize to create a table to handle all the Clothes instances
const sequelize = new Sequelize(SQL_URL)

module.exports = { sequelize };