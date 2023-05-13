const express= require("express")
const router= express.Router();// creating router

const student_cnt=require("../controller/student_cnt")


const passport=require("passport");

router.post("/add-student",passport.checkAuthentication,student_cnt.create)
router.get("/",passport.checkAuthentication,student_cnt.student)

router.get("/interviews",passport.checkAuthentication,student_cnt.interviews)

router.get("/destroy",passport.checkAuthentication,student_cnt.destroy)

router.post("/update",passport.checkAuthentication,student_cnt.update)

router.get("/download",passport.checkAuthentication,student_cnt.download)


module.exports=router