'use strict'

const { sequelize } = require('./index.js');
const { DataTypes } = require("sequelize");

const Clothes = sequelize.define("Clothes", {
	clothing_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	color: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	season: {
		type: DataTypes.ENUM('spring', 'summer', 'autumn', 'fall', 'winter'),
		allowNull: false,
	},
	occasion: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})

module.exports = {
	sequelize,
	Clothes
};