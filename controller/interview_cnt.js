const Interview= require("../models/interview")
const Student= require("../models/students")
const mailer= require("../mails/interview");
const nodemailer = require("../configs/nodemailer");

module.exports.add_interview_form=function(req,res){
    if(req.isAuthenticated()){
        return res.render("add_interview")
    }
    return res.redirect("/")
}
//add student to interview
module.exports.create=async function(req,res){

    const student = await Student.findOne({email:req.body.email})
    if(student ){
        if(student.status=="placed"){
            req.flash("info","Student is already placed")
            return res.redirect("back")
        }
        else{
            let interviewExist=await Interview.findOne({company:req.body.company})
            if(interviewExist){
                interviewExist.student.push(student);
                await interviewExist.save()

                student.interview.push(interviewExist)
                await student.save()

                mailer.newInterviewMail(interviewExist,student)

                req.flash("info",`${student.name}'s interview has been registered with ${interviewExist.company} company on ${interviewExist.date}`)
                return res.redirect("/user/Placement-cell")
            }
            else{
                const interview= await Interview.create({
                    company:req.body.company,
                    address:req.body.address,
                    date:req.body.date,
                    profile:req.body.profile,
                })
                if(interview){
                    interview.student.push(student)
                    await interview.save()
        
                    student.interview.push(interview)
                    await student.save()
                    
                    mailer.newInterviewMail(interview,student)

                    req.flash("info",`${student.name}'s interview has been registered with ${interview.company} company on ${interview.date}`)
        
                    res.redirect("/user/Placement-cell")
                }
                else{
                    req.flash("error","Something went wrong")
                    return res.redirect("back")
                }
            } 
        }
    }else{
        req.flash("error","Student not found")
        return res.redirect("back")
    }       
}
//destroy interview and removing from student model
module.exports.destroy=async function(req,res){
    try{
        let interview= await Interview.findById(req.query.id)
        if(interview){
            interview = await Interview.findByIdAndDelete(req.query.id);
            if(interview){
                let isStudent = await Student.find({ interview: req.query.id })
                if (isStudent) {
                    for (let student of isStudent) {

                        await Student.findByIdAndUpdate(student._id,{ $pull: { interview: interview._id } })

                    }
                }
                req.flash("success","Interview is removed")
                res.redirect("/user/Placement-cell")
                }
            else{
                req.flash("error","Interview not found")
                res.redirect("/user/Placement-cell")
                }
        }
    }   
    catch(err){
        req.flash("error","Something went wrong")
        console.log(err)
        return res.redirect("back")
    }     
}
// getting all students of of an interviews
module.exports.student=async function(req,res){
    try{
        let interview= await Interview.findById(req.query.id).populate("student")
        let allstudent=await Student.find({})
        let allinterview=await Interview.find({})
        
        if(interview && allstudent && allinterview){                
            return res.render("interview_students",{interviews:interview,allstudents:allstudent,allinterviews:allinterview})
        }
    }
    catch(err){
        req.flash("error","Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}

// download all interview data in CSV format
module.exports.download = async function(req,res){
    try{
        const interviews = await Interview.find({}).populate("student");
        if (interviews) {
            for(let interview of interviews){
                for(let student of interview.student){

                return res.csv([
                    {
                        "Company":interview.company,
                        "Student Name":student.name,
                        "Student Email":student.email,
                        "Date":interview.date,
                        "Profile":interview.profile,
                        "Company Address":interview.address
                    }
                ],true)
            }
        }
        }
    }
    catch(err){
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }    
}

