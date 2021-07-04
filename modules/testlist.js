const mongoose=require('mongoose');
const testlist=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    testname:{type:String,required:true},
    price:{type:String,required:true},
    discription:{type:String,required:true}

           
});
module.exports=mongoose.model('Testlist',testlist);