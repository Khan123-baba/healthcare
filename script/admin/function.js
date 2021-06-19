const mongoose=require('mongoose');
const Doctorspecility=require('../../modules/doctorspecility');
const DoctorRegister=require('../../modules/doctorrregistration');
const Patientregister=require('../../modules/patientregistration');
const Testlist=require('../../modules/testlist');
const Healthtips=require('../../modules/healthtips');
const Medicine=require('../../modules/medicine');
module.exports={
    // --------------getDoctorspecility----
    getDoctorspecility :async function(req,res){
        let doctorSpectility= await Doctorspecility.find({});
        res.render('#',{doctorSpectility});
        console.log(doctorSpectility);
    },

    // -----------------DoctorRegister--------
    getDoctorregister : async function(req,res){
        let doctorregister= await DoctorRegister.find({});
        res.render('doctorRecord',{doctorregister});
        console.log(doctorregister);
    },
    getdashboard: async function(req,res){
        res.render('dashboard')
    },
    getdoctor: async function(req,res){
        res.render('getAlldoctor')
    },
    // ------------------Patientregister----------
    getPatientregister : async function(req,res){
        let patientregister = await Patientregister.find({});
        res.render('#',{patientregister});
        console.log(patientregister);
    },
    // --------------------Testlist-----------
    getTestlist : async function(req,res){
        let testlist = await Testlist.find({});
        res.render('#',{testlist});
        console.log(testlist);
    },
    getHealthtips : async function(req,res){
        let healthtips= await Healthtips.find({});
        res.render('#',{healthtips});
        console.log(healthtips);
    },
    getMedicine: async function(req,res){
        let medicine = await Medicine.find({});
        res.render('#',{medicine});
        console.log(medicine);
    },
}