const express =require('express');
const app= express();
const path= require('path');
const morgan = require('morgan');
var $           = require('jquery');  
    

// ---------------bodyparser-------------
const bodyparser= require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/uploads', express.static(__dirname + '/uploads'));
//set the path of the jquery file to be used from the node_module jquery package  
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/')));  
app.use(express.static(path.join(__dirname+'/public')));
app.use(morgan('combined'));
// app.set('views', path.join(__dirname, 'views'));  
// app.set('testingviews', path.join(__dirname, 'testingviews'));  
// ---------------next pages routes-----------
const doctorRouter=require('./routes/doctorroutes');
const patientRouter=require('./routes/patientroutes');
const medicalstoreRouter=require('./routes/medicalshoperoutes');
app.use('/doctorRouter',doctorRouter);
app.use('/patientRouter',patientRouter);
app.use('/medicalstoreRouter',medicalstoreRouter);

// ----------------mongoose and mongodb-------
const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://healthcare:1122@healthcare.wwajq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false });
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoodb database");
});
mongoose.connection.on('error',err=>{
    console.log("Error at mongoDB",err);
});
mongoose.Promise=global.Promise;

app.get('/',(req,res)=>{
      // res.redirect('/userRoutes/Teachersubject');
      res.redirect('/doctorRouter/testing');
    });

//   const PORT = process.env.PORT || 5000;

//   app.listen(PORT, console.log(`Server running on  ${PORT}`));

// module.exports=app;
const PORT=process.env.PORT||3000;
app.listen(PORT);