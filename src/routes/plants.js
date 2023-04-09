'use strict'

const express = require('express');

// router directs the request to the function it needs to go to
const plantsRouter = express.Router();
const { Plant } = require('../models/plants/index.js')

// bring in middleware

// define routes
plantsRouter.get('/', getPlants);
plantsRouter.get('/:id', getThisPlant);
plantsRouter.post('/', createPlant);
plantsRouter.put('/:id', updatePlant);
plantsRouter.delete('/:id', deletePlant);

async function getPlants(req, res, next) {
	try {
		let data = await Plant.findAll();
		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

async function getThisPlant(req, res, next) {
	try {
		let id = req.params.id;
		let plant = await Plant.findByPk(parseInt(id));
		// console.log(plant);
		res.status(200).json(plant);
	} catch (e) {
		next(e);
	}
}

async function createPlant(req, res, next) {
	try {
		const newPlant = await Plant.create(req.body);
		res.status(200).send(newPlant)
	} catch (e) {
		next(e);
	}
};

async function updatePlant(req, res, next) {
	try {
		let id = req.params.id;
		let updatedPlant = await update(
			{
				species: req.body.species,
				sunNeeds: req.body.sunNeeds,
				canFlower: req.body.canFlower,
				petSafe: req.body.petSafe,
			},
			{
				where: {
					id: parseInt(req.params.id)
				},
			}
		);
		res.status(200).send(updatedPlant);
	} catch (e) {
		next(e);
	}
};

async function deletePlant(req, res, next) {
	try {
		let id = req.params.id;
		await Plant.destroy({
			where: {
				id: parseInt(id)
			}
		});
		res.status(200).send('This plant has been sent to the big greenhouse in the sky.');
	} catch (e) {
		next(e);
	}
};

module.exports = plantsRouter;