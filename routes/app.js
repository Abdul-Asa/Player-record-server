const express = require("express");
const db = require('./queries');

const router = express.Router();

const ode = (req,res)=>{
    res.send("ode")
}

router.get("/", db.getAllPlayers);
router.get("/:id", db.getSinglePlayer);
router.post("/", db.addPlayer);
router.patch("/:id", db.updatePlayer);
router.put("avatar/:id", ode);
router.delete("/:id", db.deletePlayer);

module.exports = router;
