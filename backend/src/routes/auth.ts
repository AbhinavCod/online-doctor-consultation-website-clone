import express,{Request,Response} from "express";
import User from "../models/users";
import {check,validationResult} from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login",[
    check("email","This field is required").isEmail(),
    check("password","This field is required").isLength({min:8}),
],async (req:Request,res:Response)=>{

    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }

     const {email,password} = req.body;

    try {
        const user = await User.findOne({email:email});

        if(!user){
            return res.status(400).json({message:"User does not exists"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const token = jwt.sign({userId:user.id},"ezTKcDwqnfcM8JvYDbNB7NBDkxAQ5TXw",{expiresIn:"1d"});
        
        res.cookie("auth_token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
        });

        return res.status(200).json({userId:user._id,doctor:user.doctor});
    } catch (error) {
        console.log(error) ;  
        return res.status(400).json({message:"Something went wrong 😒"}); 
    }
})

router.get("/validate-token",verifyToken,(req:Request,res:Response)=>{
    res.status(200).send({userId:req.userId});
});


router.post("/logout",async(req:Request,res:Response)=>{
    res.cookie("auth_token","",{expires:new Date(0)});
    res.send();
});

export default router;