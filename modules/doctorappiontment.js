const mongoose=require('mongoose');
// const Patientregister=require('./patientregistration');
// const DoctorRegister=require('./doctorrregistration')

const doctorappiontment=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    patientid:{type:String,required:true},
    doctorid:{type:String,required:true}
    // patientname:{type:String,ref:Patientregister},
    // email:{type:String,ref:Patientregister},
    // phoneno:{type:String,ref:Patientregister}, 
    // age:{type:String,ref:Patientregister},   
    // gender:{type:String,ref:Patientregister},
    // location:[{type:String,default:null}],
    // days:{type:String,ref:DoctorRegister},
    // devicetoken:{type:String,default:null},
    // patientimage:{type:String,ref:Patientregister},
  
    
    
    
  
    
});
module.exports=mongoose.model('Doctorappiontment',doctorappiontment);