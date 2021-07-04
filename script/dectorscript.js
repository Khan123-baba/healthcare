const mongoose=require('mongoose');
const Doctorspecility=require('../modules/doctorspecility');
const DoctorRegister=require('../modules/doctorrregistration');
const Testlist = require('../modules/testlist');
const Healthtips=require('../modules/healthtips');
const Medicine=require('../modules/medicine');
const saltRounds = 10;
const bcrypt=require('bcryptjs');
module.exports={
     // -------------------addDoctorSpecility-----------------
     addDoctorSpecility:async function(req,res){
        if(req.body.specilityname==undefined||req.body.specilityname==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your specilityname",
            });
        }
        let specility=Doctorspecility();
        specility._id=mongoose.Types.ObjectId();
        specility.specilityname=req.body.specilityname;

        specility.save(async function (err, specility) {
            if(err){
                console.log(err);
            }else{
                res.status(200).json({
                    "Success":true,
                    "message":" Added Doctorspecility Successfully",

                    'Doctorspecility':specility,
                 });
                console.log(specility);
            }
           });     
    },
    getAllDoctorspecility : async function(req,res){
        
        try {
            let specility=await Doctorspecility.find();
            return res.status(200).json({
                "Success":true,
                "Doctorspecility":specility,
            });
        } 
     catch (error) {
        
    }
    },

    // --------------------DoctorRegister------------
    addDoctorregister:async function(req,res){
        if(req.body.doctorname==undefined||req.body.doctorname==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your doctorname",
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
        
        if(req.body.experience==undefined||req.body.experience==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your experience",
            });
        }
      
        if(req.body.votes==undefined||req.body.votes==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your votes",
            });
        }
        if(req.body.clinicfees==undefined||req.body.clinicfees==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your clinicfees",
            });
        }
       
            
                // return res.status(200).json({
                //     "Success":false,
                //     "message":"please enter your days",
                // });
            
            
        
        // if(req.body.TimeSlot==undefined||req.body.TimeSlot==null){
        //     return res.status(200).json({
        //         "Success":false,
        //         "message":"please enter your TimeSlot",
        //     });
        // }
        if(req.body.location==undefined||req.body.location==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your location",
            });
        }
        if(req.body.verification==undefined||req.body.verification==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your verification",
            });
        }
        if(req.body.review==undefined||req.body.review==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your review",
            });
        }
        if(req.body.lat==undefined||req.body.lat==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your lat",
            });
        }
        if(req.body.log==undefined||req.body.log==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your log",
            });
        }
        if(req.body.discription==undefined||req.body.discription==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your discription",
            });
        }
        if(req.body.phoneno==undefined||req.body.phoneno==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your phoneno",
            });
        }
     
        let olduser = await DoctorRegister.findOne({email:req.body.email});
        if(olduser!=null){
            if(olduser.email==req.body.email){
                return res.send({ Success: false, message: "email already exists" });
            }
        }
        // if(req.body.days!=null||req.body.days!=undefined){
        //     var daysArray= new Array();
        // //    let doctordays= await DoctorRegister.find({});

        //     var req=req.body.days;
        //     if (Array.isArray(req)) {
        //         for(const keydays of req ){
        //             let dayss= new DoctorRegister();
        //             dayss.days=keydays.days;
        //             let newkeydays=await dayss.save();
        //             await daysArray.push(newkeydays);
        //         }
                
        //    }   }
     
        let doctorregister=DoctorRegister();
        doctorregister._id=mongoose.Types.ObjectId();
        doctorregister.doctorname=req.body.doctorname;
        doctorregister.email=req.body.email;
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        doctorregister.password=hash;
        doctorregister.specilityId=req.body.specilityId;
        doctorregister.experience=req.body.experience;
        doctorregister.votes=req.body.votes;
        doctorregister.clinicfees=req.body.clinicfees;
        var doctordays=[];
        doctordays.push(req.body.days);
        doctorregister.days=req.body.days;
        var doctortime=[];
        doctortime.push(req.body.TimeSlot);
        doctorregister.TimeSlot=req.body.TimeSlot;
        doctorregister.location=req.body.location;
        doctorregister.verification=req.body.verification;
        doctorregister.review=req.body.review;
        doctorregister.lat=req.body.lat;
        doctorregister.log=req.body.log;
        doctorregister.discription=req.body.discription;
        doctorregister.phoneno=req.body.phoneno;
        doctorregister.devicetoken=req.body.devicetoken;
        var tempPath = req.file.path;
        doctorregister.doctorimage=tempPath;

        
        doctorregister.save(async function (err, doctorregister) {
            if(err){
                console.log(err);
            }else{
                res.status(200).json({
                    "Success":true,
                    "message":" Added Doctor Successfully",

                    'Doctor':doctorregister,
                 });
                console.log(doctorregister);
            }
           });        
},

getAllDoctor : async function(req,res){
        
    try {
        let doctor=await DoctorRegister.find();
        return res.status(200).json({
            "Success":true,
            "AllDoctors":doctor,
        });
    } 
 catch (error) {
    
}
},
// --------------------doctor login-----------
logindoctor :async function(req,res){
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
    let user=await DoctorRegister.findOne(emailNumber);
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
// --------------------testlist-----------
addTestlist:async function(req,res){
    if(req.body.testname==undefined||req.body.testname==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your testname",
        });
    }
    let testlist=Testlist();
    testlist._id=mongoose.Types.ObjectId();
    testlist.testname=req.body.testname;

    testlist.save(async function (err, testlist) {
        if(err){
            console.log(err);
        }else{
            res.status(200).json({
                "Success":true,
                "message":" Added testlist Successfully",

                'TestList':testlist,
             });
            console.log(testlist);
        }
       });     
},
getAllTestlist : async function(req,res){
    
    try {
        let testlist=await Testlist.find();
        return res.status(200).json({
            "Success":true,
            "TestList":testlist,
        });
    } 
 catch (error) {
    
}
},
// -------------------Healthtips-------------
addhealthtip:async function(req,res){
    if(req.body.name==undefined||req.body.name==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your name",
        });
    }
    if(req.body.description==undefined||req.body.description==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your description",
        });
    }
    let healthtip=Healthtips();
    healthtip._id=mongoose.Types.ObjectId();
    healthtip.name=req.body.name;
    healthtip.description=req.body.description;
    healthtip.createdAt=req.body.createdAt;
    healthtip.save(async function (err, healthtip) {
        if(err){
            console.log(err);
        }else{
            res.status(200).json({
                "Success":true,
                "message":" Added healthtip Successfully",

                'Healthtip':healthtip,
             });
            console.log(healthtip);
        }
       });       
},

getAllHealthtip : async function(req,res){
    
    try {
        let healthtip=await Healthtips.find();
        return res.status(200).json({
            "Success":true,
            "HealthTip":healthtip,
        });
    } 
 catch (error) {
    
}
},
// ---------------------Medicine----------
addmedicine:async function(req,res){
    if(req.body.name==undefined||req.body.name==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your Medicine name",
        });
    }
    if(req.body.price==undefined||req.body.price==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your email",
        });
    }
    if(req.body.discription==undefined||req.body.discription==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your discription",
        });
    }
  
    
    let medicine=Medicine();
    medicine._id=mongoose.Types.ObjectId();
    medicine.name=req.body.name;
    medicine.price=req.body.price;
    medicine.discription=req.body.discription;
    medicine.medicineimage=req.file.path;
    medicine.medicalstoreid=req.body.medicalstoreid;
    medicine.save(async function (err, medicine) {
        if(err){
            console.log(err);
        }else{
            res.status(200).json({
                "Success":true,
                "message":" Added  Medicine Successfully",

                'Medicine':medicine,
             });
            console.log(medicine);
        }
       });        
},

getAllMedicine : async function(req,res){
    
try {
    let medicine=await Medicine.find({medicalstoreid:req.params.medicalstoreid});
    return res.status(200).json({
        "Success":true,
        "AllMedicine":medicine,
    });
} 
catch (error) {

}
},
// --------------------change doctor name---------------
changedoctorname :async function(req,res){
    try {
        // let id=req.body._id;
        // let doctorname=req.params.doctorname;
        // let option={new:true};

        let changename=await DoctorRegister.findByIdAndUpdate({_id:req.body._id},{doctorname:req.body.doctorname},  { new: true } );
        return res.status(200).json({
            "success":true,
            "DocterUpdateName":changename,
        });
    } catch (error) {
        console.log(error);
    }
},
// getDoctorAfterNameChange: async function(req,res){
//     try {
//         let afterchange=await DoctorRegister.findById({_id:req.body._id});
//         return res.status(200).json({
//             "success":true,
//             "DocterAfterNameChange":afterchange
//         }) ;
//     } catch (error) {
//         console.log(error);
//     }
// },
// ---------------------update doctor password---------
changeDoctorPassword: async function (req, res) {
    if (req.body._id != undefined && req.body._id != null) {
        if (!req.body.currentPassword) {
            return res.send({ 'Success': false, 'message': "Current Password is required." })
        }
        if (!req.body.newPassword) {
            return res.send({ 'Success': false, 'message': "New Password is required." })
        }
        if (!req.body.confirmPassword) {
            return res.send({ 'Success': false, 'message': "Confirm Password is required." })
        }
        if (req.body.newPassword != req.body.confirmPassword) {
            return res.send({ 'Success': false, 'message': "Password did not match." })
        }

        let foundUser = await DoctorRegister.findOne({ _id: req.body._id });
        if (foundUser != null && foundUser != "") {
            const match = await bcrypt.compare(req.body.currentPassword, foundUser.password);
            if (match) {
                let salt = bcrypt.genSaltSync(saltRounds);
                let hash = bcrypt.hashSync(req.body.newPassword, salt);
                foundUser.password = hash;
                foundUser.save(async function (err, savedUser) {
                    if (err) {
                        res.send({ "Success": false, "message": err })
                    }
                    else {
                        res.send({ "Success": true, "message": "Password changed successfully","DoctorPasswordUpdate":foundUser })
                    }
                })
            }
            else {
                return res.send({ 'Success': false, 'message': "Current Password is Incorrect." })
            }
        }
    }
    // else {
    //     res.redirect('/quick-swapper/admin');
    // }

},
// --------------------change doctor email-------------
changeDoctorEmail: async function(req,res){
    try {
        let changeemail=await DoctorRegister.findByIdAndUpdate({_id:req.body._id},{email:req.body.email},  { new: true } );
        return res.status(200).json({
            "success":true,
            "DocterUpdateEmail":changeemail,
        });
    } catch (error) {
        
    }
},
// -------------get doctor by specility---
getDoctorySpecilityId :async function(req,res){
try {
    // let specilityId=req.body.specilityId;
    // var o_id = new ObjectId(id);

    let finddoctor= await DoctorRegister.find({specilityId : req.params.specilityId});
    return res.status(200).json({
        "success":true,
        "GetDoctorBySpecilityId":finddoctor,
        
    });
} catch (error) {
    console.log(error);
}
},


}