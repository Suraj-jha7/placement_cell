const mongoose= require("mongoose");
const env=require("./environment") // importing environment.js file to set value at needed placed

async function main(){
    // connecting with mongodb
    await mongoose.connect(`mongodb+srv://bhadauriaritik:Ritik%402000@cluster0.jpdcwug.mongodb.net/Placement_cell?retryWrites=true&w=majority`)
    return;
}

main().then(function(data){
    //hendelling success
    console.log("Connected to MongoDB");
    return;
}).catch(function(err){
     //hendelling error
    console.log("Error on connecting with MongoDB:",err);
    return;
})
