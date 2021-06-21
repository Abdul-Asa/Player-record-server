const express = require("express");
const router = express.Router();

const ode = (req,res)=>{
    res.send("ode")
}

router.get("/", ode);
router.get("/:id", ode);
router.post("/", ode);
router.patch("/:id", ode);
router.put("avatar/:id", ode);
router.delete("/:id", ode);

module.exports = router;