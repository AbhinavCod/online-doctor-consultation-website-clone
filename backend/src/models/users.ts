import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { OfflineBookingType, bookingSchema } from "./booking";

export type UserType = {
    _id:string;
    userId?:string,
    fullName:string;
    email:string;
    password:string;
    patient:boolean;
    doctor:boolean;
    bookings:OfflineBookingType[];
};

const Schema = new mongoose.Schema<UserType>({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    patient:{type:Boolean,required:true},
    doctor:{type:Boolean,required:true},
    userId:{type:String},
    bookings:[bookingSchema]
});

Schema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,8);
    }
    next();
})

const User = mongoose.model<UserType>("User",Schema);
export default User;
