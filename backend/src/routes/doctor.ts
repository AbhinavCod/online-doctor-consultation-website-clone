import express,{Request,Response} from "express";
import { check,validationResult } from "express-validator";
import Doctor from "../models/doctor";
import verifyToken from "../middleware/auth";
const router = express.Router();

router.post("/add-doctor",[
    check("fullName","This field is required").isString(),
    check("age","This field is required").isString(),
    check("email","This field is required").isEmail(),
    check("gender","This field is required").isString(),
    check("phoneNumber","This field is required").isNumeric(),
    check("homeAddress","This field is required").isString(),
    check("clinicName","This field is required").isString(),
    check("clinicAddress","This field is required").isString(),
    check("type","This field is required").isString(),
    check("speciality","This field is required").isString(),
    check("experience","This field is required").isNumeric(),
    check("degree","This field is required").isString(),
],verifyToken,async (req:Request,res:Response)=>{
    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(404).json({message:errors.array()});
    }

    try {
        let doctor = await Doctor.findOne({email:req.body.email});
        if(doctor){
            return res.status(404).json({message:"Doctor already exists"});
        }

        doctor = new Doctor(req.body);
        await doctor.save();
        return res.status(200).json({message:"Doctor registered successfully"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({message:error});
    }
});

export default router;