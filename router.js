const express = require("express");
const router = express.Router();

router.get("/", async(req, res)=>{
    const random =  parseInt(Math.random()*1000);
    // console.log("random no is ", random);
    res.json(random);
});

module.exports = router;