const Student= require("../models/students")
const Interview= require("../models/interview")

module.exports.placement=async function(req,res){

    try {
        // populating the user for each posts by user id (that was inside the user object)
        const student = await Student.find({})
        const interview = await Interview.find({})
        
        return res.render('placement', {
            students:student,
            interviews:interview
        })
        
    }
    catch (err) {
        console.log("Error", err)
        return;
    }
}

