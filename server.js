// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
const firebaseApp = require("firebase/app");
const dbTools = require("firebase/database");
const express = require("express");
// const sqlite = require("sqlite3");
// const { open } = require("sqlite");
// const path = require("path");
const cors = require("cors");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	// ...
	// The value of `databaseURL` depends on the location of the database
	databaseURL: "https://test-787e9-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const dbApp = firebaseApp.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = dbTools.getDatabase(dbApp);

const PORT = 8080;

// let db;
// (async () => {
// 	db = await open({
// 		filename: "db.db",
// 		driver: sqlite.Database,
// 	});
// })();

const app = express();
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

app.get("/grades", (req, res) => {
	// hit db for get all grades
	let grades = [
		{
			id: 0,
			percent: 0.93,
			points: 120,
			pointsTotal: 150,
			name: "assignment 1",
		},
		{
			id: 1,
			percent: 0.67,
			points: null,
			pointsTotal: null,
			name: "assignment 2",
		},
		{
			id: 2,
			percent: 0.98,
			points: null,
			pointsTotal: null,
			name: "assignment 3",
		},
	];

	res.json(grades);
});

app.get("/test/:id", async (req, res) => {
	dbTools.set(dbTools.ref(db, "/test"), {
		id: req.params.id,
		name: "testing auth",
		someVal: false,
	});

	let ref = dbTools.ref(db);
	let result = await dbTools
		.get(dbTools.child(ref, "test"))
		.then((snapshot) => {
			return snapshot.val();
		});
	console.log(result);

	res.json(result);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
