"use strict";

const express = require("express");

const cors = require("cors");
const { getData } = require("./controller /game.controller");
const {
	createFAvGame,
	getFAvGame,
	deletFavData,
	updateFavData,
} = require("./controller /game.crud.controller");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect("mongodb://localhost:27017/Gaming", {
	useNewUrlParser: true,

	useUnifiedTopology: true,
});

app.listen(PORT, () => {
	console.log(`server start with port ${PORT}`);
});

app.get("/game", getData);
app.post("/game/favourite", createFAvGame);
app.get("/game/favourite", getFAvGame);
app.delete("/game/favourite/:slug", deletFavData);
app.put("/game/favourite/:slug", updateFavData);
