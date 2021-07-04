const mongoose=require('mongoose');
const Doctorspecility=require('../../modules/doctorspecility');
const DoctorRegister=require('../../modules/doctorrregistration');
const Patientregister=require('../../modules/patientregistration');
const Testlist=require('../../modules/testlist');
const Healthtips=require('../../modules/healthtips');
const Medicine=require('../../modules/medicine');
const SliderImage=require('../../modules/imageslider');
const MedicalStore=require('../../modules/medicienshope');
const Doctorappiontment=require('../../modules/doctorappiontment');
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
        res.render('doctors',{doctorregister});
        console.log(doctorregister);
    },
    // getdashboard: async function(req,res){
    //     res.render('testing')
    // },
    // getdoctor: async function(req,res){
    //     res.render('testing')
    // },
    // ------------------Patientregister----------
    getPatientregister : async function(req,res){
        let patientregister = await Patientregister.find({});
        res.render('allpatient',{patientregister});
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
    // ---------------get medicien-
    getMedicine: async function(req,res){
        let medicine = await Medicine.find({});
        res.render('#',{medicine});
        console.log(medicine);
    },
    // -----------------slideri images------
    getsliderimage: async function(req,res){
        let slider= await SliderImage.find({});
        res.render('#',{slider});
        console.log(slider);
    },
    // ------------------MedicalStore-------------
    getMedicalStore: async function(req,res){
        let medicalstore= await MedicalStore.find({});
        res.render('allMedicienStore',{medicalstore});
        console.log(medicalstore);
    },
// --------------Doctorappiontment---------------
getDoctorappiontment:async function(req,res){
    let doctorappiontment= await Doctorappiontment.find({});
    res.render("#",{doctorappiontment});
    console.log(doctorappiontment);
}
}