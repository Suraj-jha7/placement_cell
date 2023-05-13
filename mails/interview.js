const env=require("../configs/environment")
const nodeMailer =require("../configs/nodemailer")

// for user email verification 
module.exports.newInterviewMail =function (interview,student) {
    let mailHTML = nodeMailer.renderTemplate({interview:interview,student:student}, "/informingInterview.ejs")
    // send mail with defined transport object
    nodeMailer.transporter.sendMail({
        from: env.client_mail, //sender address
        to: student.email, //list of receivers
        subject: ` Interview Invitation for the position of ${interview.profile} at ${interview.company}`,  // Subject line
        html: mailHTML  //html body
    },(err,info)=>{
        if(err){
            console.log(err)
            return
        }
        return
    })
}