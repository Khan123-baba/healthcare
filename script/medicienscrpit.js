const mongoose=require('mongoose');
const MedicalStore=require('../modules/medicienshope');
const saltRounds = 10;
const bcrypt=require('bcryptjs');
// const path=require('../uploads');
module.exports={
    // ----------------Patientregister----------
    addmedicalstor:async function(req,res){
        if(req.body.Username==undefined||req.body.Username==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Username",
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
        if(req.body.storename==undefined||req.body.storename==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your storename",
            });
        }
        if(req.body.location==undefined||req.body.location==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your location",
            });
        }
   
    
        let olduser = await MedicalStore.findOne({email:req.body.email});
        if(olduser!=null){
            if(olduser.email==req.body.email){
                return res.send({ Success: false, message: "email already exists" });
            }
        }
        let medicalStore=MedicalStore();
        medicalStore._id=mongoose.Types.ObjectId();
        medicalStore.Username=req.body.Username;
        medicalStore.email=req.body.email;
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        medicalStore.password=hash;
        medicalStore.phoneno=req.body.phoneno;
        medicalStore.storename=req.body.storename;
        medicalStore.location=req.body.location;
        medicalStore.devicetoken=req.body.devicetoken;
        medicalStore.shopimage=req.file.path;
        
        medicalStore.save(async function (err, medicalStore) {
            if(err){
                 console.log(err);
            }else{
                res.status(200).json({
                    "Success":true,
                    "message":" Added Student medicalStore",

                    'MedicalStore':medicalStore,
                 });
                console.log(medicalStore);
            }
           });        
},

getAllMedicalStore : async function(req,res){
        
    try {
        let medicalStore=await MedicalStore.find();
        return res.status(200).json({
            "Success":true,
            "AllMedicalStore":medicalStore,
        });
    } 
 catch (error) {
    
}
},
// --------------------medical store login---------
loginmedicalstore :async function(req,res){
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
    let user=await MedicalStore.findOne(emailNumber);
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
}   