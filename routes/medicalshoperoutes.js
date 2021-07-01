const express=require('express');
const router=express.Router();
const objectId =require('mongodb').ObjectID;
const multer=require('multer');
const getMedicalstoreitem=require('../script/admin/function');
const postMedicalstoreitem=require('../script/medicienscrpit');


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
    // -----------------medical store register---------
    router.post('/medicalstoreregister',upload.single('shopimage'),(req,res)=>{
        postMedicalstoreitem.addmedicalstor(req,res);
    });
    router.get('/medicalstoreregister',(req,res)=>{
        getMedicalstoreitem.getMedicalStore(req,res);
    });
    router.get('/allMedicalstore',(req,res)=>{
        postMedicalstoreitem.getAllMedicalStore(req,res);
    });
    // ------------------medical store login---
    router.post('/loginmedicalstore',(req,res)=>{
        postMedicalstoreitem.loginmedicalstore(req,res);
    });
    // ==================mediciencard===============
    router.post('/mediciencard',(req,res)=>{
        postMedicalstoreitem.addmediciencard(req,res);
    });
    router.get('/getmediciencard/:getid',(req,res)=>{
        postMedicalstoreitem.getAllMediciencard(req,res);
    });
    // ------------------medicienorder---------------
    router.post('/medicienorder',(req,res)=>{
        postMedicalstoreitem.addmedicienorder(req,res);
    });
    router.get('/getmedicienorder/:getid',(req,res)=>{
        postMedicalstoreitem.getAllMedicienorder(req,res);
    });
    module.exports=router;