'use strict'

const express = require('express');

// router directs the request to the function it needs to go to
const clothesRouter = express.Router();
const { Clothes } = require('../models/clothes.js')

// bring in middleware

// define routes
clothesRouter.get('/', checkCloset);
clothesRouter.get('/:id', tryOnClothes);
clothesRouter.post('/', clothesShopping);
clothesRouter.put('/:id', alterClothes);
clothesRouter.delete('/', donateClothes);

const data = [];

async function checkCloset(req, res, next) {
	let data = await clothes.findAll();
	res.status(200).json(data);
};

async function tryOnClothes(req, res, next) {
	let id = req.params.id;
	let clothes = await Clothes.findByPk(parseInt(id));
	console.log(clothes);
	res.json(clothes);
}

async function clothesShopping(req, res, next) {
	const newClothes = await Clothes.create(req.body);
	res.send(newClothes)
};

// this one is not working
async function alterClothes(req, res, next) {
	let id = req.params.id;
	let clothes = await clothes.update(
		{ clothes_name: req.body.food_name },
		{ color: req.body.color },
		{ season: req.body.season },
		{ occasion: req.body.occasion },
		{
			where: {
				id: parseInt(id)
			}
		}
	)
	res.send(clothes);
};

async function donateClothes(req, res, next) {
	let id = req.params.id;
	await Clothes.destroy({
		where: {
			id: parseInt(id)
		}
	});
	res.send(200);
};

module.exports = clothesRouter;