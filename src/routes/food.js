'use strict'

const express = require('express');

// router directs the request to the function it needs to go to
const foodRouter = express.Router();
const { Food } = require('../models/food.js')

// bring in middleware

// define routes
foodRouter.get('/', getFood);
foodRouter.get('/:id', getThisFood);
foodRouter.post('/', cookFood);
foodRouter.put('/:id', seasonFood);
foodRouter.delete('/:id', compostFood);

async function getFood(req, res, next) {
	let data = await Food.findAll();
	res.status(200).json(data);
};

async function getThisFood(req, res, next) {
	let id = req.params.id;
	let food = await Food.findByPk(parseInt(id));
	console.log(food);
	res.json(food);
}

async function cookFood(req, res, next) {
	const newFood = await Food.create(req.body);
	res.send(newFood)
};

// not working
async function seasonFood(req, res, next) {
	let id = req.params.id;
	let food = await Food.update(
		{ food_name: req.body.food_name },
		{ flavor: req.body.flavor },
		{ isVegan: req.body.isVegan },
		{ meal: req.body.meal },
		{
			where: {
				id: parseInt(req.params.id)
			}
		}
	)
	res.send(food);
};

async function compostFood(req, res, next) {
	let id = req.params.id;
	await Food.destroy({
		where: {
			id: parseInt(id)
		}
	});
	res.send(200);
};

module.exports = foodRouter;