const express=require('express');
const router=express.Router();
const objectId =require('mongodb').ObjectID;
const multer=require('multer');

const getDoctoritem=require('../script/admin/function');
const postDoctoritem=require('../script/dectorscript');


// -------------for image upload and store-----
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        cb(null,`${file.fieldname+file.originalname}_${Date.now()}${file.originalname}`);
    }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
        cb(null,true);
    }else{
        cb("file must be jpeg or png",false);
    }
    };
    const upload =multer({storage:storage,limits:{
        fileSize:1024*1024*5,
    }, fileFilter:fileFilter});
// -------------DoctorSpecility---------
router.post('/doctorSpecility',(req,res)=>{
postDoctoritem.addDoctorSpecility(req,res);
});
router.get('/doctorSpecility',(req,res)=>{
    getDoctoritem.getDoctorspecility(req,res);
});
router.get('/alldoctorSpecility',(req,res)=>{
    postDoctoritem.getAllDoctorspecility(req,res);
});
// --------------------doctorrregistration------
router.post('/doctorregister',upload.single('doctorimage'),(req,res)=>{
    postDoctoritem.addDoctorregister(req,res);
});
router.get('/doctorregister',(req,res)=>{
    getDoctoritem.getDoctorregister(req,res);
});
router.get('/alldoctorregistration',(req,res)=>{
    postDoctoritem.getAllDoctor(res,res);
});

router.get('/dashboard',(req,res)=>{
    getDoctoritem.getdashboard(req,res);
});
router.get('/testing',(req,res)=>{
    res.render('testing');
});

// ---------------doctor-login------------
router.post('/doctorlogin',(req,res)=>{
    postDoctoritem.logindoctor(req,res);
});
// -----------------testlist-----------
router.get('/testlist',(req,res)=>{
    getDoctoritem.getTestlist(req,res);
});
router.post('/testlist',(req,res)=>{
    postDoctoritem.addTestlist(req,res);
});
router.get('/allTestlist',(req,res)=>{
    postDoctoritem.getAllTestlist(req,res);
});
// -----------------healthtip---------
router.post('/healthtip',(req,res)=>{
    postDoctoritem.addhealthtip(req,res);
});
router.get('/healthtip',(req,res)=>{
    getDoctoritem.getHealthtips(req,res);
});
router.get('/allhealthtip',(req,res)=>{ 
    postDoctoritem.getAllHealthtip(req,res);
});
// --------------------medicine----------
router.post('/medicine',upload.single('medicineimage'),(req,res)=>{
    postDoctoritem.addmedicine(req,res);
});
router.get('/medicine',(req,res)=>{
    getDoctoritem.getMedicine(req,res);
});
router.get('/allmedicine',(req,res)=>{
    postDoctoritem.getAllMedicine(req,res);
});
module.exports=router;