"use strict";
const { gameModel } = require("../models/gameSchema");

const createFAvGame = async (req, res) => {
	const { title, salePrice, dealRating, thumb } = req.body;

	const slug = title.toLowerCase().split(" ").join("-");

	gameModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newGameModel = gameModel({
				title: title,
				slug: slug,
				salePrice: salePrice,
				dealRating: dealRating,
				thumb: thumb,
			});

			newGameModel.save();
			res.send(newGameModel);
		}
	});
};

const getFAvGame = async (req, res) => {
	gameModel.find({}, (error, data) => {
		res.send(data);
	});
};

const deletFavData = (req, res) => {
	const slug = req.params.slug;
	gameModel.remove({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			const data = await gameModel.find({});
			res.send(data);
		}
	});
};

const updateFavData = async (req, res) => {
	const slug = req.params.slug;

	const updateData = req.body;
	gameModel.findOne({ slug: slug }, (error, data) => {
		data.title = updateData.title;
		data.dealRating = updateData.dealRating;
		data.save();
	});

	const newData = await gameModel.find({});
	res.send(newData);
};

module.exports = { createFAvGame, getFAvGame, deletFavData, updateFavData };
