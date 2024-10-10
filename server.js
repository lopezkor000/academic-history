const express = require("express");
const sqlite = require("sqlite3");
const { open } = require("sqlite");
const cors = require("cors");
// const path = require("path");

const PORT = 8080;

let db;
(async () => {
	db = await open({
		filename: "db.db",
		driver: sqlite.Database,
	});
})();

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

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
