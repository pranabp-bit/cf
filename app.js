const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");
const { response } = require("express");
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

//   https.get(url,function(resp){
//     console.log(res.statusCode);
//   })
  res.sendFile(__dirname+"/Link_accounts.html");
})

app.post( "/", function(req,res){
    var elec_acc_no =req.body.elec_acc_no;
    var LPG_acc_no = req.body.LPG_acc_no;
    var petrol_acc_no = req.body.petrol_acc_no;
    var diesel_acc_no = req.body.diesel_acc_no;
    console.log(elec_acc_no);
    if(response.statusCode===200){
        res.send("Success");
    }
    else{
        res.send("Failure");
    }
})

app.listen(3000,function(){
  console.log("server is running at port 3000.");
})
