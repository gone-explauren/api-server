'use strict'

const { sequelize } = require('./index.js');
const { DataTypes } = require("sequelize");

const Food = sequelize.define("Food", {
	food_name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	flavor: {
		type: DataTypes.ENUM('sweet', 'savory', 'umami', 'sour', 'salty', 'fresh', 'rich', 'fruity', 'stale'),
		allowNull: false,
	},
	isVegan: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	meal: {
		type: DataTypes.ENUM('breakfast', 'brunch', 'lunch', 'snack', 'appetizer', 'dinner', 'supper', 'dessert'),
		allowNull: false,
	}
})

module.exports = {
	sequelize,
	Food
};