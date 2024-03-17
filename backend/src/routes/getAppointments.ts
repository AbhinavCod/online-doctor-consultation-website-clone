import express,{Request,Response} from "express";
import verifyToken from "../middleware/auth";
import Booking from "../models/booking";
import User from "../models/users";
const router = express.Router();

router.post("/get-my-offlineaAppointments",verifyToken,async (req:Request,res:Response)=>{
    console.log(req.userId);
    try {
        const user = await User.findOne({_id:req.userId}); 
        return res.status(200).json(user?.bookings);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Error getting appointments"});
    }
});


export default router;