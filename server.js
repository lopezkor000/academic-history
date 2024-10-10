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
// app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
