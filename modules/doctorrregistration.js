const mongoose=require('mongoose');
    const doctorregister=mongoose.Schema({
    
    _id:mongoose.Types.ObjectId,
    doctorname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    specilityId:{type: String},
    experience:{type:String, required:true},
    votes:{type:String,required:true},    
    clinicfees:{type:String,required:true},
    days:[{type:String,required:true}],
    TimeSlot:[{type:String}],
    location:{type:String,required:true},
    verification: { type: String,required:true },
    review: { type: String,required:true},
    devicetoken:{type:String},
    lat:{type:String,required:true},
    log:{type:String,required:true},
    discription:{type:String,required:true},
    phoneno:{type:String,required:true},
    doctorimage:{type:String,required:true},

    
    
    
  
    
});
module.exports=mongoose.model('DoctorRegister',doctorregister);