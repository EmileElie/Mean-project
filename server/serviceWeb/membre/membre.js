"use strict";

var MongoClient = require("mongodb").MongoClient;
var assert      = require("assert");
var url         = "mongodb://localhost:27017";

var membreSearch = function(db) {
	var cursor = db.collection("Membres").find();
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) 
			for (let p in doc) console.log(p+" : "+doc[p]);
		console.log("\n");
	});
};

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
	let db = client.db("mean");
	assert.equal(null, err);
	membreResearch(db);
	db.close();
});

module.exports = membre;