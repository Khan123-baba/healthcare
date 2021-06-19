const mongoose=require('mongoose');
const medicine=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    price:{type:String,required:true},
    medicineimage:{type:String,required:true},    
    discription:{type:String,required:true},
    
    
    
  
    
});
module.exports=mongoose.model('Medicine',medicine);