const mongoose=require('mongoose');
const healthtips=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    description:{type:String,required:true},
    createdAt:{type: Date,default:Date.now},
    
  
    
    
    
  
    
});
module.exports=mongoose.model('Healthtips',healthtips);