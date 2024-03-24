import mongoose from "mongoose";

export type DoctorInformation = {
    fullName:string,
    age:number,
    gender:string,
    phoneNumber:string,
    email:string,
    degree:string,
    experience:number,
    speciality:string,
    type:string,
    clinicName:string,
    clinicAddress:string,
    homeAddress:string,
}

const Schema = new mongoose.Schema<DoctorInformation>({
    fullName:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    degree:{type:String,required:true},
    experience:{type:Number,required:true},
    speciality:{type:String,required:true},
    type:{type:String,required:true},
    clinicName:{type:String,required:true},
    clinicAddress:{type:String,required:true},
    homeAddress:{type:String,required:true},
});

const Doctor = mongoose.model<DoctorInformation>("DoctorInfo",Schema);
export default Doctor;