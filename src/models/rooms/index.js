'use strict'

const { DataTypes } = require('sequelize');

const Room = (sequelize) => sequelize.define('Room', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	numWindows: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	petAccess: {
		type: DataTypes.BOOLEAN,
    allowNull: false,
	},
});

module.exports = Room;