const pool = require("./db")

pool.query("CREATE TABLE players (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, position VARCHAR(20) NOT NULL, clubname VARCHAR(20) NOT NULL, avatar uuid);"
);