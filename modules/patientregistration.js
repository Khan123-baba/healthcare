const mongoose=require('mongoose');
const patientregister=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    patientname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},
    phoneno:{type:String,required:true},    
    age:{type:String,required:true},
    gender:{type:String,required:true},
    devicetoken:{type:String},
    patientimage:{type:String,required:true},
  
    
    
    
  
    
});
module.exports=mongoose.model('Patientregister',patientregister);