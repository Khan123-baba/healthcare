const mongoose=require('mongoose');
const patientregister=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    patientname:{type:String,required:true,},
    email:{type:String,required:true},
    password:{type:String, required:true},
    phoneno:{type:String,required:true},    
    gender:{type:String,default:null},
    devicetoken:{type:String,default:null},
    patientimage:{type:String,default:null},
  
    
    
    
  
    
});
module.exports=mongoose.model('Patientregister',patientregister);