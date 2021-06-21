const mongoose=require('mongoose');
const Patientregister=require('../modules/patientregistration');
const SliderImage=require('../modules/imageslider');
const Doctorappiontment=require('../modules/doctorappiontment');
const Doctorrregistration=require('../modules/doctorrregistration')
const saltRounds = 10;
const bcrypt=require('bcryptjs');
// const path=require('../uploads');
module.exports={
    // ----------------Patientregister----------
    addpatientregister:async function(req,res){
        if(req.body.patientname==undefined||req.body.patientname==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your patientname",
            });
        }
        if(req.body.email==undefined||req.body.email==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your email",
            });
        }
        if(req.body.password==undefined||req.body.password==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your password",
            });
        }
      
        if(req.body.phoneno==undefined||req.body.phoneno==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your phoneno",
            });
        }
        if(req.body.age==undefined||req.body.age==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your age",
            });
        }
        // if(req.body.gender==undefined||req.body.gender==null){
        //     return res.status(200).json({
        //         "Success":false,
        //         "message":"please enter your gender",
        //     });
        // }
   
    
        let olduser = await Patientregister.findOne({email:req.body.email});
        if(olduser!=null){
            if(olduser.email==req.body.email){
                return res.send({ Success: false, message: "email already exists" });
            }
        }
        let patientregister=Patientregister();
        patientregister._id=mongoose.Types.ObjectId();
        patientregister.patientname=req.body.patientname;
        patientregister.email=req.body.email;
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        patientregister.password=hash;
        patientregister.phoneno=req.body.phoneno;
        patientregister.age=req.body.age;
        patientregister.gender=req.body.gender;
        patientregister.devicetoken=req.body.devicetoken;
       patientregister.patientimage=req.file.path;
        
        patientregister.save(async function (err, patientregister) {
            if(err){
                 console.log(err);
            }else{
                res.status(200).json({
                    "Success":true,
                    "message":" Added Student patientregister",

                    'patientregister':patientregister,
                 });
                console.log(patientregister);
            }
           });        
},

getAllPatient : async function(req,res){
        
    try {
        let patient=await Patientregister.find();
        return res.status(200).json({
            "Success":true,
            "Allpatient":patient,
        });
    } 
 catch (error) {
    
}
},
// ----------------------------patient login-----------
loginpatient :async function(req,res){
    if(req.body.email==undefined||req.body.email==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your email",
        });
    }
    if(req.body.password==undefined||req.body.password==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your password",
        });
    }
    
    emailNumber = {
        email: req.body.email.toLowerCase().replace(/\s/g, ""),
      };
    console.log(req.body.email);
    let user=await Patientregister.findOne(emailNumber);
    let loginUser = user;
    if(user==null ||user.length<1){
        return res.send({ Success: false, message: "User Not Found" });
    }
    const match = await bcrypt.compare(req.body.password, loginUser.password);

    if (match) {
        if (req.body.devicetoken != undefined && req.body.devicetoken != "") {
          if (user.devicetoken != req.body.devicetoken) {
            user.devicetoken = req.body.devicetoken;
          }
        }
        user.onlineStatus = true;
        await user.save(function (err, user) {
          if (err) console.log(err);
          //else res.send({ "Success": true, "message": "Verification successfull!" })
        });
        res.send({ Success: true, user: loginUser });
      } else {
        return res.send({ Success: false, message: "User Not Found" });
      }
},
// -----------------------------slider-----------
addsliderimage:async function(req,res){
    // if(req.body.sliderimage==undefined||req.body.sliderimage==null){
    //     return res.status(200).json({
    //         "Success":false,
    //         "message":"please enter your sliderimage",
    //     });
    // }
    let sliderimage=SliderImage();
    sliderimage._id=mongoose.Types.ObjectId();
    sliderimage.sliderimage=req.file.path;
    sliderimage.save(async function (err, sliderimage) {
        if(err){
             console.log(err);
        }else{
            res.status(200).json({
                "Success":true,
                "message":" Added Student sliderimage",

                'sliderimage':sliderimage,
             });
            console.log(sliderimage);
        }
       });
},
getAllsliderimage : async function(req,res){
        
    try {
        let slider=await SliderImage.find();
        return res.status(200).json({
            "Success":true,
            "AllsliderImages":slider,
        });
    } 
 catch (error) {
    
}
},
// ----------------------------doctor Appointment------------
// addDoctorAppointment:async function(req,res){
//     if(req.body.location==undefined||req.body.location==null){
//         return res.status(200).json({
//             "Success":false,
//             "message":"please enter your specilityname",
//         });
//     }
//     let appointment=Doctorappiontment();
//     appointment._id=mongoose.Types.ObjectId();
//     appointment.location=req.body.location;
//     try {
//         // let subjectnotification=await SubjectNotification.find();
//         let appointment = await Doctorappiontment.find({}).populate('Patientregister').populate('DoctorRegister');
//         return appointment.save(async function (err, appointment) {
//             if(err){
//                 console.log(err);
//             }else{
//                 res.status(200).json({
//                     "Success":true,
//                     "message":" Added appointment Successfully",
    
//                     'appointment':appointment,
//                  });
//                 console.log(appointment);
//             }
//            });     
//     } 
//  catch (error) {
    
// }

// },
addDoctorAppointment:async function(req,res){
        if(req.body.patientid==undefined||req.body.patientid==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your patientid",
            });
        }
        if(req.body.doctorid==undefined||req.body.doctorid==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your doctorid",
            });
        }
        let appointment=Doctorappiontment();
        appointment._id=mongoose.Types.ObjectId();
        appointment.patientid=req.body.patientid;
        appointment.doctorid=req.body.doctorid;
        appointment.save(async function (err, appointment) {
            if(err){
                 console.log(err);
            }else{
                res.status(200).json({
                    "Success":true,
                    "message":" Added Doctor appointment",

                    'DoctorAppointment':appointment,
                 });
                console.log(appointment);
            }
           });       
    },
getAllDoctorappointment : async function(req,res){
    
    try {
        let appointment=await Doctorappiontment.find().populate('patientid').populate('doctorid');
        return res.status(200).json({
            "Success":true,
            "DoctorAppointment":appointment,
        });
    } 
 catch (error) {
    
}
},
}