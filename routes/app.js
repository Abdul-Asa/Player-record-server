const express = require("express");
const db = require('../database/queries');
const multer  = require('multer');
const upload = multer({ dest: './Avatars' });

const router = express.Router();

const ode = (req,res)=>{
    res.send("ode")
}

router.get("/", db.getAllPlayers);
router.get("/:id", db.getSinglePlayer);
router.post("/", db.addPlayer);
router.patch("/:id", db.updatePlayer);
router.delete("/:id", db.deletePlayer);
router.put("/avatar/:id", upload.single('avatar'), db.updateAvatar);

module.exports = router;
