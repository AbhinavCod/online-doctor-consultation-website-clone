import mongoose from "mongoose";

export type OfflineBookingType = {
    _id:string;
    userId?:string,
    fullName:string;
    email:string,
    phoneNumber:string,
    disease:string,
    details:string,
    symptom:string,
    date:Date,
    price?:string
};

export const bookingSchema = new mongoose.Schema<OfflineBookingType>({
    fullName:{type:String,required:true,},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    disease:{type:String,required:true},
    details:{type:String,required:true},
    symptom:{type:String,required:true},
    date:{type:Date,required:true},
    userId:{type:String},
},{timestamps:true});

const Booking = mongoose.model<OfflineBookingType>("OfflineBooking",bookingSchema);
export default Booking;