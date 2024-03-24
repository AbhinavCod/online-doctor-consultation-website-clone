import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-clients";

export type AddDoctorData = {
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

const AddDoctorPage = () => {
    const mutation = useMutation(apiClient.addDoctor,{
        onSuccess:()=>{
            console.log("Doctor registered");
        },
        onError:()=>{
            console.log("Doctor registeration failed");
        }
    })
    const {register,handleSubmit,formState:{errors}} = useForm<AddDoctorData>();
    const [gender,setGender] = useState("");
    const onSubmit = handleSubmit((data)=>{
        data = {...data,gender}
        console.log(data);
        mutation.mutate(data);
    })
  return (


    <div className="flex flex-col gap-4 items-center">
        <form className="flex flex-col h-full justify-between border-2 border-gray-400 py-2 px-4 rounded-sm gap-6 my-4 mx-4" style={{width:"75%"}} onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 my-4">
            <h1 className="text-4xl text-gray-800 tracking-tight font-semibold">Doctor Information cum Joining Form.</h1>
            <h1 className="text-2xl text-gray-700 tracking-tight">Please enter the details correctly.</h1>
            <h1 className="text-2xl text-gray-700 tracking-tight">All the details will be secure and strictly confidential.</h1>
        </div>

        <div>
            <hr></hr>
        </div>

        <div className="grid md:grid-cols-[2fr_2fr] gap-6">
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Full Name</label>
                    <input type="text" placeholder="Full Name" className=" w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("fullName",{
                        required:"Full Name is required"
                    })}></input>{
                        errors.fullName && (
                            <span className="text-red-500">{errors.fullName.message}</span>
                        )
                    }
            </div>
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Email Id</label>
                    <input type="email" placeholder="Email Id" className="w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("email",{
                        required:"Email is required"
                    })}></input>{errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
            </div>
        </div>

        <div className="grid md:grid-cols-[2fr_2fr] gap-6">
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Current Age</label>
                    <input type="number" placeholder="Age in number" className=" w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("age",{
                        required:"Please enter age between 18 and 70",
                        min:18,
                        max:70
                    })}></input>{
                        errors.age && (
                            <span className="text-red-500">{errors.age.message}</span>
                        )
                    }
            </div>
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Home Address</label>
                    <textarea  placeholder="Home Address" className="w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("homeAddress",{
                        required:"Home Address is required"
                    })}></textarea>{errors.homeAddress && (
                        <span className="text-red-500">{errors.homeAddress.message}</span>
                    )}
            </div>
        </div>

        <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between  gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Gender :</label>
                    <div className="flex flex-row gap-2 ml-16">
                        <input type="radio" name="gender" value={gender} onChange={()=> setGender("male")}></input>
                        <label className="text-xl">Male</label>
                    </div>
                    <div className="flex flex-row gap-2 ml-16">
                        <input type="radio" name="gender" value={gender} onChange={()=> setGender("female")}></input>
                        <label className="text-xl">Female</label>
                    </div>
                    <div className="flex flex-row gap-2 ml-16">
                        <input type="radio" name="gender" value={gender} onChange={()=> setGender("Others")}></input>
                        <label className="text-xl">Others</label>
                    </div>

            </div>
        </div>

        <div className="grid md:grid-cols-[2fr_2fr] gap-6">
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Contact No.</label>
                    <div className="flex flex-row w-full">
                    <span className="border-gray-500 px-2 py-1 border-1 text-xl bg-slate-200 rounded-sm">+91</span><input type="tel" placeholder="Phone Number" className=" w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("phoneNumber",{
                        required:"Phone Number is required",
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                          }
                    })}></input>{
                        errors.phoneNumber && (
                            <span className="text-red-500">{errors.phoneNumber.message}</span>
                        )
                    }

                    </div>
            </div>
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Clinic Address</label>
                    <textarea placeholder="Clinic Address" className="w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("clinicAddress",{
                        required:"Clinic Address  is required"
                    })}></textarea>{errors.clinicAddress && (
                        <span className="text-red-500">{errors.clinicAddress.message}</span>
                    )}
            </div>
        </div>

        <div className="flex flex-col gap-6 items-start px-4">
            <label className="text-xl font-semibold tracking-tight">Qualifications :</label>
            <textarea className="w-full outline-none border-1 border-gray-500 rounded-sm" placeholder="Enter the qualifications" {...register("degree",{
                required:"Clinic Address is required"
            })}></textarea>{errors.degree && (
                <span className="text-red-500">{errors.degree.message}</span>
            )}

        </div>

        <div className="grid md:grid-cols-[2fr_2fr] gap-6">
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Clinic Name :</label>
                    <div className="flex flex-row w-full">
                    <input type="text" placeholder="Clinic Name" className=" w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("clinicName",{
                        required:"Clinic Address is required",
                        
                    })}></input>{
                        errors.clinicName && (
                            <span className="text-red-500">{errors.clinicName.message}</span>
                        )
                    }

                    </div>
            </div>
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Type :</label>
                    <input type="text" placeholder="General Physician,Dentist etc..." className="w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("type",{
                        required:"Doctor's Profession type is required"
                    })}></input>{errors.type && (
                        <span className="text-red-500">{errors.type.message}</span>
                    )}
            </div>
        </div>


        <div className="grid md:grid-cols-[2fr_2fr] gap-6">
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Total Working Experience :</label>
                    <div className="flex flex-row w-full">
                    <input type="number" min={0} max={45} placeholder="Experience in yrs..." className=" w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("experience",{
                        required:"Professional Experince is required",
                        min:0,
                        max:40
                    })}></input>{
                        errors.experience && (
                            <span className="text-red-500">{errors.experience.message}</span>
                        )
                    }

                    </div>
            </div>
            <div className="flex flex-col gap-2 items-start px-4">
                    <label className="text-xl font-semibold tracking-tight">Speciality :</label>
                    <input type="text"  className="w-full outline-none py-1 px-2 text-xl border-gray-500 border-1 rounded-sm" {...register("speciality",{
                        required:"Doctor's Speciality is required"
                    })}></input>{errors.speciality && (
                        <span className="text-red-500">{errors.speciality.message}</span>
                    )}
            </div>
        </div>

        <div className="flex">
            <button className="bg-blue-500 py-2 px-3 rounded-sm ml-6 text-white text-xl hover:bg-blue-600 hover:shadow-md">Add Me</button>
        </div>

        </form>
        
    </div>
  )
}

export default AddDoctorPage;