const mongoose=require('mongoose');
const medicalstore=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    Username:{type:String,required:true,},
    email:{type:String,required:true},
    password:{type:String, required:true},
    phoneno:{type:String,required:true}, 
    storename:{type:String,required:true},   
    location:{type:String,default:null},
    devicetoken:{type:String,default:null},
    shopimage:{type:String,default:null},
  
    
    
    
  
    
});
module.exports=mongoose.model('MedicalStore',medicalstore);