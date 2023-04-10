'use strict'

const server = require('../src/server')
const supertest = require('supertest');

// integration test
const { sequelize, Room, Plant } = require('../src/models');

const request = supertest(server.app)

beforeAll(async () => {
	await sequelize.sync();
});

afterAll(async() => {
	await sequelize.drop();
});

let roomID = '';
let plantID = '';

describe('Testing the express server', () => {
  test('Should return a 404 on a bad route', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('Should return a 404 on a bad method', async () => {
    const response = await request.patch('/plant');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });
});

describe('Testing data models', () => {
	test('Should build a room', async () => {
		let newRoom = await Room.create({
			name: 'library',
			numWindows: 4,
			petAccess: false,
		});

		roomID = newRoom.id;
		expect(newRoom.name).toEqual('library');
		expect(roomID).toBeTruthy();
	});

	test('Should grow a plant', async () => {
		let newPlant = await Plant.create({
			species: 'philodendron',
			sunNeeds: 'indirect light',
			canFlower: false,
      petSafe: false,
			room: roomID,
		});
		
		plantID = newPlant.id;
		expect(newPlant.species).toEqual('philodendron');
		expect(newPlant.room).toEqual(1);
	});

	test('Can fetch a plant and the room it\'s in', async () => {
    let plant = await Plant.read(plantID, {
      include: Room.model
    });
		// checking association betwen two tables
		let room = await Room.read(plant.room)

    console.log("Plant with association: ", plant.species);
    expect(plant.species).toEqual('philodendron');
    expect(room.name).toEqual('library');
  });
});