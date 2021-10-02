"use strict";

const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
	title: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	salePrice: String,
	dealRating: String,
	thumb: String,
});

const gameModel = mongoose.model("Gaming", gameSchema);

module.exports = { gameModel };
