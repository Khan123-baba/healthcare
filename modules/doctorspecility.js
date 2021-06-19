const mongoose=require('mongoose');
const doctorspecility=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    specilityname:{type:String,required:true}
       
});
module.exports=mongoose.model('Doctorspecility',doctorspecility);