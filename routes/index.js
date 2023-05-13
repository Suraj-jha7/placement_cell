const express =require("express");
const router= express.Router();

const home_cnt= require("../controller/home_cnt")

router.get("/",home_cnt.home)

router.use("/user",require("./user"))

module.exports =router