const express= require("express")
const router= express.Router();// creating router

const interview_cnt=require("../controller/interview_cnt")


const passport=require("passport");

router.post("/add-interview",passport.checkAuthentication,interview_cnt.create)

router.get("/",passport.checkAuthentication,interview_cnt.student)
router.get("/destroy",passport.checkAuthentication,interview_cnt.destroy)

router.get("/download",passport.checkAuthentication,interview_cnt.download)

module.exports=router