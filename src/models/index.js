'use strict'
// barrel file

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');


const SQL_URL = process.env.SQUL_UL || "sqlite:memory:";
// sqlite:memory: will save the data to memory
// sqlite::memory: (with two columns between words) will not save the data, and it will be deleted when the server is restarted

// using Sequelize to create a table to handle all the Clothes instances
const sequelize = new Sequelize(SQL_URL)

const Collection = require('./collection.js');

const createRoom = require('./rooms/index.js');
const RoomModel = createRoom(sequelize);

const createPlant = require('./plants/index.js');
const PlantModel = createPlant(sequelize);

// establish our associations / relationships
// (from sequelize model method)
RoomModel.hasMany(PlantModel, { foriegnKey: "roomID", sourceKey: 'id' });
PlantModel.belongsTo(RoomModel, { foriegnKey: "roomID", targetKey: 'id' });

module.exports = { 
	sequelize, 
	Room: new Collection(RoomModel), 
	Plant: new Collection(PlantModel), 
};