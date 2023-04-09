'use strict'

const express = require('express');

// router directs the request to the function it needs to go to
const roomsRouter = express.Router();
const { Room } = require('../models/rooms/index.js')

// bring in middleware

// define routes
roomsRouter.get('/', getRooms);
roomsRouter.get('/:id', getThisRoom);
roomsRouter.post('/', createRoom);
roomsRouter.put('/:id', updateRoom);
roomsRouter.delete('/', deleteRoom);

const data = [];

async function getRooms(req, res, next) {
	try {
		let roomData = await Room.findAll();
		res.status(200).json(roomData);
	} catch (e) {
		next(e);
	}
};

async function getThisRoom(req, res, next) {
	try {
		let id = req.params.id;
		let room = await Room.findByPk(parseInt(id));
		// console.log(room);
		res.status(200).json(room);
	} catch (e) {
		next(e);
	}
}

async function createRoom(req, res, next) {
	try {
		const newRoom = await Room.create(req.body);
		res.status(200).send(newRoom)
	} catch (e) {
		next(e);
	}
};

async function updateRoom(req, res, next) {
	try {
		let id = req.params.id;
		let updatedRooms = await update(
			{
				name: req.body.name,
				numWindows: req.body.numWindows,
				petAccess: req.body.petAccess,
			},
			{
				where: {
					id: parseInt(id),
				},
			}
		);
		res.status(200).send(updatedRooms);
	} catch (e) {
		next(e);
	}
};

async function deleteRoom(req, res, next) {
	try {
		let id = req.params.id;
		await Room.destroy({
			where: {
				id: parseInt(id)
			}
		});
		res.status(200).send('This room has been successfully demolished.');
	} catch (e) {
		next(e);
	}
};

module.exports = roomsRouter;