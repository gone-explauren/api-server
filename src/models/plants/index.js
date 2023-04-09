'use strict'

const { DateTypes } = require('sequelize');

const Plant = (sequelize) => {
	return sequelize.define('Plant', {
		species: {
			type: DateTypes.STRING,
			allowNull: false,
		},
		sunNeeds: {
			type: DateTypes.ENUM('full', 'indirect sunlight', 'low light'),
			allowNull: false,
		},
		canFlower: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		petSafe: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		// foriegn key for the Band model
		roomID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	});
}

module.exports = Room;