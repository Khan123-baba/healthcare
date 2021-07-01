const mongoose=require('mongoose');
const mediciencard=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    medicienid:{type:String,ref:'Medicine'},
    userid:{type:String,ref:'Patientregister'},
    medicienstoreid:{type:String,ref:'MedicalStore'},
    getid:{type:String},

       
});
module.exports=mongoose.model('Mediciencard',mediciencard);