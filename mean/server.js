"use strict"

var assert      = require("assert");
var express     = require('express');
var app         = express();
var MongoClient = require("mongodb").MongoClient;
var url         = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("mean");
	assert.equal(null, err);

	app.get("/membres", (req, res) => {
		db.collection("membres").find().toArray((err, documents) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			console.log("/membres : ");
			for (let doc of documents)
				console.log(doc);
			res.end(JSON.stringify(documents));
		});
	});

	app.get("/membres/:id", (req, res) => {
		db.collection("membres").find(req.params.id).toArray((err, documents) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Content-type", "application/json");
			console.log("/membres : ");
			for (let doc of documents)
				console.log(doc);
			res.end(JSON.stringify(documents));
		});
	});
});

app.listen(8888);