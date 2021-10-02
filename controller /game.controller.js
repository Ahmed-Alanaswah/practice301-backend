"use strict";

const superagent = require("superagent");
const { dataModel } = require("../models/dataModel");
const getData = async (req, res) => {
	superagent
		.get("https://www.cheapshark.com/api/1.0/deals?storeID=3")
		.then((data) => {
			const responseData = data.body.map((game) => {
				return new dataModel(game);
			});
			res.send(responseData);
		});
};

module.exports = { getData };
