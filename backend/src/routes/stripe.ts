import Stripe from "stripe";
import express, {Request,Response} from "express";
import verifyToken from "../middleware/auth";
import User from "../models/users";
import Booking from "../models/booking";

const stripe = new Stripe("sk_test_51Oh9rESBL00bWoeBfGU09jTWV32nzXycfT8BAOpEBuSsPYQEOboXhjqRLxWdGHxjv4Z3KeEFBGQoqHG2QRKeeIcF00jszOcLro")

const router = express.Router();

router.post("/payment-intent",verifyToken,async(req:Request,res:Response)=>{
    const {email} = req.body;
    const price = 149;
    const user = User.findOne({email:email});

    if(!user){
        return res.status(400).json({message:"User not exists"});
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount:149,
        currency:"inr",
        metadata:{
            email:req.body.email
        },
    })

    if(!paymentIntent.client_secret){
        return res.status(500).json({message:"Error creating payment intent"});
    }

    const response = {
        paymentIntentId : paymentIntent.id,
        clientSecret : paymentIntent.client_secret.toString(),
        price :price
    }
    // console.log(response);

    res.send(response);
})


router.post("/confirm-payment",async (req:Request,res:Response)=>{
    try {
        const paymentIntentId = req.body.id;
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId as string);

        if(!paymentIntent){
            return res.status(400).json({message:"Payment not found"});
        }

        if(paymentIntent.status !== "succeeded"){
            return res.status(400).json({message:`Paymnet intent status not succeeded. Status : ${paymentIntent.status}`});
        }

        const updatedUser = await Booking.findOneAndUpdate({email:req.body.email},{
            $push:{price:"149"}
        });

        await updatedUser?.save();
        res.status(200).json({message:"Payment confirmed and added to account"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong!!!"});
    }
});


export default router;