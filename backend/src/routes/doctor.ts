import express,{Request,Response} from "express";
import { check,validationResult } from "express-validator";
import Doctor, { DoctorInformation } from "../models/doctor";
import verifyToken from "../middleware/auth";
import multer from "multer";
import cloudinary from "cloudinary";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage:storage,
    limits:{
        fileSize:20*1024*1024,
    }
})

router.post("/add-doctor",verifyToken,[
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
    check("city","This field is required").isString(),
],upload.array("imageFiles",1),async (req:Request,res:Response)=>{

    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(404).json({message:errors.array()});
    }

    try {
        console.log(req.body);
        let doctor = await Doctor.findOne({email:req.body.email});
        if(doctor){
            return res.status(404).json({message:"Doctor already exists"});
        }
        
        const imageFiles = req.files as Express.Multer.File[];
        const newDoctor:DoctorInformation = req.body;

        const imageUrls = await uploadImages(imageFiles);


        // const uploadPromises = imageFiles.map(async (image)=>{
        //     const b64 = Buffer.from(image.buffer).toString("base64");
        //     let dataURI = "data:" + image.mimetype + ";base64," + b64;
        //     const res = await cloudinary.v2.uploader.upload(dataURI);
        //     return res.url;
        // });



        // const imageUrls = await Promise.all(uploadPromises);
        newDoctor.imageUrls = imageUrls;

        doctor = new Doctor(newDoctor);

        await doctor.save();
        return res.status(201).json({message:"Doctor registered successfully"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({message:error});
    }
});

router.get("/get-doctor",async (req:Request,res:Response)=>{
    try {
        const data = await Doctor.find();
        return res.status(200).send(data);
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Some error occured"})
    }
})

async function uploadImages(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    });

    //2. If upload was successsfull, add the URLs to the new hotel
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}

export default router;