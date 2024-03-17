import express, { Request,Response } from "express";
import {check,validationResult} from "express-validator";
import Booking from "../models/booking";
import verifyToken from "../middleware/auth";
import User from "../models/users";

const router = express.Router();

router.post("/offline-booking",verifyToken,[
    check("fullName","Full Name is required").isString(),
    check("email","Email is required").isEmail(),
    check("phoneNumber","Phone Number is required").isString(),
    check("disease","Specify the disease").isString(),
    check("details","Specify some detail about disease").isString(),
    check("symptom","Specify the symptom").isString(),
    check("date","Date is required").isDate(),
],async(req:Request,res:Response)=>{
    console.log("hello");
    
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        
        let booking = new Booking(req.body);
        booking._id = req.userId;
        
        user.bookings.push(booking);
        await user.save();
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Booking Failed"});
    }
});


export default router;