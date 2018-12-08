const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose"); 
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
     ProjectName:String,    
     password:String
}); 

//UserSchema.plugin(passportLocalMongoose);  

var Project = mongoose.model("Project",ProjectSchema);
module.exports = Project;