"use strict";

var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
	let db = client.db("mean");
	assert.equal(null, err);
	console.log("Connexion au serveur MongoDB réussi");
	db.close();
})