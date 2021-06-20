const mongoose=require('mongoose');
const slider=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    sliderimage:{type:String,default:null},
  
    
    
    
  
    
});
module.exports=mongoose.model('SliderImage',slider);