const mongoose=require('mongoose');

const doctorappiontment=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    patientid:{type:String,ref:'Patientregister'},
    doctorid:{type:String,ref:'DoctorRegister'},
   

    days:{type:String,required:true},
    TimeSlot:{type:String,required:true}
  
    
    
    
  
    
});
module.exports=mongoose.model('Doctorappiontment',doctorappiontment);