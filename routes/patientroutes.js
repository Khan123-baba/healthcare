const express=require('express');
const router=express.Router();
const objectId =require('mongodb').ObjectID;
const multer=require('multer');
const getPatientitem=require('../script/admin/function');
const postPatientitem=require('../script/patientscript');


const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        cb(null,`${file.originalname}_${Date.now()}${file.originalname}`);
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
    }, });
// ------------------patientregistration-----
router.post('/patientregister',upload.single('patientimage'),(req,res)=>{
    postPatientitem.addpatientregister(req,res);
});
router.get('/patientregister',(req,res)=>{
    getPatientitem.getPatientregister(req,res);
});
router.get('/allPatientregistration',(req,res)=>{
    postPatientitem.getAllPatient(req,res);
});
// -----------------patient login-------
router.post('/patientlogin',(req,res)=>{
    postPatientitem.loginpatient(req,res);
});
// ------------------sliderimage----------
router.post('/sliderimage',upload.single('sliderimage'),(req,res)=>{
    postPatientitem.addsliderimage(req,res);
});
router.get('/sliderimage',(req,res)=>{
    getPatientitem.getsliderimage(req,res);
});
router.get('/allsliderimage',(req,res)=>{
    postPatientitem.getAllsliderimage(req,res);
});
// ------------------------Doctor appointment-------------
router.post('/doctorappointment',(req,res)=>{
    postPatientitem.addDoctorAppointment(req,res);
});
router.get('/doctorappointment',(req,res)=>{
    getPatientitem.getDoctorappiontment(req,res);
});
router.get('/allDoctorappiontment',(req,res)=>{
    postPatientitem.getAllDoctorappointment(req,res);
});
// ------------------------getAllDoctorSideAppointment----------
router.get('/allDoctorSideAppointment/:doctorid',(req,res)=>{
    postPatientitem.getAllDoctorSideAppointment(req,res);
    });
// -----------------getAllPatientSideAppointment--------------
router.get('/allPatientSideAppointment/:patientid',(req,res)=>{
    postPatientitem.getAllPatientSideAppointment(req,res);
});
module.exports = router;