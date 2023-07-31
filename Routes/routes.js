const express = require("express");
const router = express.Router();
const user = require("../modals/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = process.env.SECRET_KEY;
const order = require("../modals/order")


//========================= creating a new user ===============================//
router.post("/signup" , async(req , res)=>{
    const {name , email , number , location , password} = req.body;

    let salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(password , salt);
    try{
        const data = await user.create({
            name:name,
            email:email,
            number:number,
            location: location,
            password:secPassword
         })
        
         const finaluser = await data.save();
        //  console.log(finaluser);
         res.json({success:true})

    }
    catch(err){
        console.log(err);
        res.json({success:false});
        // res.status(400).send(err);
       
    }
})

//============================= login  user =====================================//

router.post('/login' , async(req , res)=>{
    try{
        const {email , password} = req.body;

        const logData = await user.findOne({email:email});

        if(!logData){
            return res.status(400).json({error:"try with valid credentials"});
        }
        const comparePassword = await bcrypt.compare(password , logData.password);
        if( !comparePassword){
            return res.status(400).json({error:"try with valid credentials"});

        }
        const data ={
            users :{
                id:logData.id
            }
        }
        const authToken = await jwt.sign( data ,SECRET_KEY );
        console.log(authToken);
        return res.json({success:true , authToken :authToken});
    

        // console.log(logData); 
        // res.json({success:true});
    }
    catch(err){
        console.log(err);
        res.json({success:false});
    }
})


//================================Display Food Data============================================//

router.post('/foodData' , async(req, res)=>{
    try{
       console.log(global.food__items);
       res.send([global.food__items , global.food__category]);
    }
    catch(err){
       console.log(err);
       res.send("server err");
    }
})


//==================order data ===============================//

router.post("/orderData" , async(req , res)=>{
    let data = req.body.order_data
    await data.splice( 0 , 0  , {order_date : req.body.order_date} , {order_time : req.body.order_time})

    // if email is not exit in db then create :else : insetmany()

    let eid = await order.findOne({'email' : req.body.email});
    console.log(eid);
    if(eid === null){
        try{
            await order.create({
              email: req.body.email,
              order_data : [data]
            }).then(()=>{
                res.json({success:true})
            })
        }
        catch(err){
          console.log(err);
          res.send("server error" , err.message)
        }

    }
    else{
        try{
            await order.findOneAndUpdate({email: req.body.email},
                {$push : {order_data : data}}).then(()=>{
                    res.json({success: true})
                })
        }
        catch(err){
               console.log(err);
            res.status(400).send("server error" , err.message)
        }
    }

})


//==================my order data ===============================//

router.post("/myOrderData" , async (req , res)=>{
   try{
     let myData = await order.find({"email" : req.body.email});
     res.json({orderData :  myData});
   }
   catch(err){
    res.status(400).send("server error" , err.message)
   }
})

module.exports = router;
