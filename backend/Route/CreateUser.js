const express=require('express')
const router =express.Router()
const user=require('../Model/User')
const {body,validationResult}=require('express-validator');
router.post("/createuser",
[

body('password','Incorrect Password').isLength({ min: 5 })],async(req,res)=>
{
    const errors = validationResult(req);
    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
    return    res.status(400).json({errors:errors.array()});
    }

try {
  await  user.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
    })
    res.json({success:true});
} catch (error) {
    console.log(error)
    res.json({success:false});
}
})

router.post("/loginuser",[

    body('email','Incorrect mail').isEmail({})],async(req,res)=>
{
    let email=req.body.email
     try { 
 let userdata= await  user.findOne({email});
 if(!userdata)
 {  
    console.log("WRONG MAIL");
    
    return  res.status(400).json({errors:"WRONG MAIL ID"});
    
 }
if(req.body.password!==userdata.password)
{
    console.log("WRONG PASS");
    return  res.status(400).json({errors:"WRONG PASSWORD "});
}
return res.json({success:true})
  
} catch (error) {
    console.log("WRONG MAIL");
    console.log(error)
    res.json({success:false});
}
})
module.exports=router;