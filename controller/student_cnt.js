const Student = require("../models/students")
const Interview = require("../models/interview")

// add student form 
module.exports.add_student_form = function (req, res) {
    if (req.isAuthenticated()) {
        return res.render("add_student")
    }
    return res.redirect("/")
}
// add a student
module.exports.create = async function (req, res) {
    try {
        const isExist = await Student.findOne({ email: req.body.email });
        if (isExist) {
            req.flash("info", "User already exist.")
            return res.redirect("/user/Placement-cell")
        }
        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            college: req.body.college,
            batch: req.body.batch,
            course: req.body.course,
            status: req.body.status,
        })
        if (student) {

            // if (req.xhr){
            //     // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
            //     return res.status(200).json({
            //         data: {
            //             students: student
            //         },
            //         message: "Student is added"
            //     })
            // }



            req.flash("success", "Student is added")
            res.redirect("/user/Placement-cell")
        }
        else {
            req.flash("error", "Something went wrong")
            return res.redirect("back")
        }
    } catch (err) {
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}
// getting  student details 
module.exports.student = async function (req, res) {
    try {
        let student = await Student.findById(req.query.id)
        if (student) {
            return res.render("student_detail", { student: student })
        }
    }
    catch (err) {
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}
// show registered interviews 
module.exports.interviews = async function (req, res) {
    try {
        let student = await Student.findById(req.query.id).populate("interview")
        let allstudent = await Student.find({})
        let allinterview = await Interview.find({})

        if (student && allstudent && allinterview) {
            return res.render("student_interviews", { students: student, allstudents: allstudent, allinterviews: allinterview })
        }
    }
    catch (err) {
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}
// removing student and remove from interview also
module.exports.destroy = async function (req, res) {
    try {
        let student = await Student.findById(req.query.id)

        if (student) {
            student = await Student.findByIdAndDelete(req.query.id);
            if (student) {
                let isInterview = await Interview.find({ student: req.query.id })
                if (isInterview) {
                    for (let interview of isInterview) {
                        await Interview.updateMany({ student: student._id }, { $pull: { student: student._id } })
                        await Student.findByIdAndUpdate(student._id, { $pull: { interview: interview._id } })
                    }
                }
                let interviews = await Interview.find({});
                for (let interview of interviews) {
                    if (interview.student.length == 0) {
                        await Interview.findByIdAndDelete(interview._id)
                    }
                }
                req.flash("success", "Student is deleted")
                res.redirect("/user/Placement-cell")
            }
            else {
                req.flash("error", "Student is not found")
                res.redirect("/user/Placement-cell")
            }
        }
    }
    catch (err) {
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}
// updation form for student 
module.exports.update = async function (req, res) {
    try {
        const student = await Student.findByIdAndUpdate(req.query.id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                college: req.body.college,
                batch: req.body.batch,
                course: req.body.course,
                status: req.body.status,
            }
        })

        if (student) {

            // if (req.xhr){
            //     // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
            //     return res.status(200).json({
            //         data: {
            //             students: student
            //         },
            //         message: "Student is added"
            //     })
            // }
            const isInterview = await Interview.find({ student: student._id })

            if (req.body.status == "placed" && isInterview) {
                for (let interview of isInterview) {
                    await Interview.updateMany({ student: student._id }, { $pull: { student: student._id } })
                    await Student.findByIdAndUpdate(student._id, { $pull: { interview: interview._id } })
                }
            }

            let interviews = await Interview.find({});
            for (let interview of interviews) {
                if (interview.student.length == 0) {
                    await Interview.findByIdAndDelete(interview._id)
                }
            }
            req.flash("success", "Student is updated")
            res.redirect("/user/Placement-cell")
        }
        else {
            req.flash("error", "Something went wrong")
            return res.redirect("back")
        }
    }
    catch (err) {
        req.flash("error", "Something went wrong")
        console.log(err)
        return res.redirect("back")
    }
}
// download all Student data in CSV format
module.exports.download = async function(req,res){
    try{
        const students = await Student.find({}).populate("interview");
        if (students) {
            for(let student of students){
                for(let interview of student.interview){
                    return res.csv([
                        {
                            "Name":student.name,
                            "Email":student.email,
                            "College":student.college,
                            "Batch":student.batch,
                            "Course":student.course,
                            "Status":student.status, 
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

