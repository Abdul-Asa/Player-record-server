const pool = require("./db")

pool.query("CREATE TABLE players (id SERIAL PRIMARY KEY, name VARCHAR(50), position VARCHAR(20), clubname VARCHAR(20) NOT NULL, avatar uuid);"
);