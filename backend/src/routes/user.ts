import express, {Request,Response} from "express";
import {check,validationResult} from "express-validator"
import User from "../models/users";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register",[
    check("email","This field is required").isEmail(),
    check("password","This field is required").isLength({min:8}),
], async (req:Request,res:Response)=>{

    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }

    try {
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        user = new User(req.body);
        user.patient = true;
        user.doctor = false;
        await user.save();

        const token = jwt.sign({userId:user.id},"ezTKcDwqnfcM8JvYDbNB7NBDkxAQ5TXw",{expiresIn:"1d"});
        res.cookie("auth_token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
        })

        return res.status(200).json({message:"User registered successfully 👌"});
    } catch (error) {
        console.log(error) ;  
     return res.status(400).json({message:"Something went wrong 😒"}); 
    }
})


router.post("/registerDoctor",[
    check("email","This field is required").isEmail(),
    check("password","This field is required").isLength({min:8}),
], async (req:Request,res:Response)=>{

    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }

    try {
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }

        user = new User(req.body);
        user.patient = false
        user.doctor = true;
        await user.save();

        const token = jwt.sign({userId:user.id},"ezTKcDwqnfcM8JvYDbNB7NBDkxAQ5TXw",{expiresIn:"1d"});
        res.cookie("auth_token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
        })

        return res.status(200).json({message:"User registered successfully 👌"});
    } catch (error) {
        console.log(error) ;  
     return res.status(400).json({message:"Something went wrong 😒"}); 
    }
})

export default router;