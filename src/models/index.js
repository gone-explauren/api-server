'use strict'
// barrel file

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const SQL_URL = process.env.SQUL_UL || "sqlite::memory:";

// using Sequelize to create a table to handle all the Clothes instances
const sequelize = new Sequelize(SQL_URL)

module.exports = { sequelize };