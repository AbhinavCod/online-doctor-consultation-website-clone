// import { useForm } from "react-hook-form";
// import { useMutation } from "react-query";
// import * as apiClient from "../api-clients";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// export type OfflineBookingFormData = {
//   fullName:string,
//   disease:string,
//   symptom:string,
//   date:Date;
//   details:string,
//   phoneNumber:string,
//   email:string
// }

// const OfflineBookingForm = () => {
//   const {setId,setSecret,setAmount} = useAppContext();
//   const navigate = useNavigate();
//   const mutation1 = useMutation(apiClient.offlineBooking,{
//     onSuccess: async (data)=>{
//       toast.success("Booking Done , pls pay the amount to confirm");
//       console.log("Booking Done , pls pay the amount to confirm");
//       const d = await data;
//       console.log(d);
      
//     },
//     onError:()=>{
//       toast.error("Booking Failed, try later")
//       console.log("Booking Failed, try later");
//     },
//   });

//   const mutation2 = useMutation(apiClient.createPaymentIntent,{
//     onSuccess:(data)=>{
//       console.log(data);
//       setId(data.paymentIntentId);
//       setSecret(data.clientSecret);
//       setAmount(data.price);
//       console.log("Payment Intent Created");
//       navigate("/confirmPayment");
//     },
//     onError:()=>{
//       console.log("Payment Intent creation failed");
//     }
//   })
  
//     const {register,handleSubmit,formState:{errors}} = useForm<OfflineBookingFormData>();

//     const onSubmit = handleSubmit((data)=>{
//       console.log(data);
//       mutation1.mutate(data);
//       mutation2.mutate(data);
//     })

//   return (
//     <form className="flex flex-col gap-6 border-2 rounded-md shadow-xl z-10 border-gray-400 p-4 m-4" onSubmit={onSubmit}>
      
//       <div className="flex items-start">
//         <label className="text-3xl text-gray-700 font-semibold">Pateint's Appointment Form</label>
//         </div>

//       <div className="flex gap-3">
//       <div className="flex flex-col items-start gap-1">
//           <label className="text-md font-semibold tracking-tight">Full Name</label>
//           <input type="text" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="Full Name" {...register("fullName",{
//             required:"Full Name is required"
//           })}></input>

//           {errors.fullName && (
//             <span className="text-red-500">{errors.fullName.message}</span>
//           )}

//       </div>

//     <div className="flex flex-col items-start gap-1">
//           <label className="text-md font-semibold tracking-tight">Contact No.</label>
//           <input type="phonenumber" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="Phone Number" {...register("phoneNumber",{
//             required:"Phone Number is required",
//             minLength:{
//               value:10,
//               message:"Invalid Phone Number"
//             },
//             maxLength:{
//               value:10,
//               message:"Invalid Phone Number"
//             }
//           })}></input>{errors.phoneNumber && (
//             <span className="text-red-500">{errors.phoneNumber.message}</span>
//           )}

//     </div>
//       </div>

//       <div className="flex gap-3">
//         <div className="flex flex-col items-start">
//           <label className="text-md font-semibold tracking-tight">Disease</label>
//           <input type="text" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="Disease" {...register("disease",{
//               required:"Disease type required"
//             })}></input>{errors.disease && (
//               <span className="text-red-500">{errors.disease.message}</span>
//             )}
//         </div>

//             <div className="flex flex-col items-start">

//             <label className="text-md font-semibold tracking-tight">Email Id</label>
//             <input type="email" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="Email Id" {...register("email",{
//                 required:"Email is required",
//                 validate:{
//                   matchPattern : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                   "Invalid Email Id"
//               }
//               })}></input>{errors.email && (
//                 <span className="text-red-500">{errors.email.message}</span>
//               )}
//             </div>
//       </div>

//       <div className="flex">
//         <div className="flex flex-col items-start">
//           <label className="text-md font-semibold tracking-tight ">Description</label>
//           <input type="text" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"37rem"}} placeholder="Detail Disease Description" {...register("details",{
//                 required:"Please provide a bit detail about description"
//               })}></input>{errors.details && (
//                 <span className="text-red-500">{errors.details.message}</span>
//               )}

//         </div>
//       </div>

//       <div className="flex sm:flex-row gap-3">
//         <div className="flex flex-col items-start">
//             <label className="text-md font-semibold tracking-tight ">Date of Appointment</label>
//             <input type="date" className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="" {...register("date",{
//                 required:"Date is required"
//               })}></input>{errors.date && (
//                 <span className="text-red-500">{errors.date.message}</span>
//               )}

//         </div>

//         <div className="flex flex-col items-start">
//           <label className="text-md font-semibold ml- tracking-tight ">Symptom</label>
//           <input className="rounded-md border-gray-400 border-1 py-1 px-1 outline-none" style={{width:"18rem"}} placeholder="Symptom" {...register("symptom",{
//               required:"Atleast one symptom is required"
//             })}></input>{errors.symptom && (
//               <span className="text-red-500">{errors.symptom.message}</span>
//             )}
//         </div>
//       </div>

//       <div className="flex w-full items-cnter">
//           <button type="submit" className=" bg-blue-600 text-white text-xl font-bold px-3 rounded-md py-2 hover:rounded-3xl hover:text-blue-700">Pay & Book </button>
//       </div>

//     </form>
//   )
// }

// export default OfflineBookingForm;


import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-clients";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

export type OfflineBookingFormData = {
  fullName: string;
  disease: string;
  symptom: string;
  date: Date;
  details: string;
  phoneNumber: string;
  email: string;
};

const OfflineBookingForm = () => {
  const { setId, setSecret, setAmount } = useAppContext();
  const navigate = useNavigate();
  const mutation1 = useMutation(apiClient.offlineBooking, {
    onSuccess: async (data) => {
      toast.success("Booking Done, please pay the amount to confirm");
      console.log("Booking Done, please pay the amount to confirm");
      const d = await data;
      console.log(d);
    },
    onError: () => {
      toast.error("Booking Failed, try later")
      console.log("Booking Failed, try later");
    },
  });

  const mutation2 = useMutation(apiClient.createPaymentIntent, {
    onSuccess: (data) => {
      console.log(data);
      setId(data.paymentIntentId);
      setSecret(data.clientSecret);
      setAmount(data.price);
      console.log("Payment Intent Created");
      navigate("/confirmPayment");
    },
    onError: () => {
      console.log("Payment Intent creation failed");
    },
  });

  const { register, handleSubmit, formState: { errors } } = useForm<OfflineBookingFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    mutation1.mutate(data);
    mutation2.mutate(data);
  });

  return (
    <form className="container mx-auto px-4 border-2 rounded-md shadow-xl z-10 border-gray-400 py-4" onSubmit={onSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Patient's Appointment Form</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Full Name" {...register("fullName", { required: "Full Name is required" })} />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Contact No.</label>
          <input type="text" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Phone Number" {...register("phoneNumber", {
            required: "Phone Number is required",
            minLength: { value: 10, message: "Invalid Phone Number" },
            maxLength: { value: 10, message: "Invalid Phone Number" }
          })} />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Disease</label>
          <input type="text" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Disease" {...register("disease", { required: "Disease type required" })} />
          {errors.disease && (
            <span className="text-red-500">{errors.disease.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Email Id</label>
          <input type="email" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Email Id" {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid Email Id"
            }
          })} />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Description</label>
          <input type="text" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Detail Disease Description" {...register("details", { required: "Please provide a bit detail about description" })} />
          {errors.details && (
            <span className="text-red-500">{errors.details.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Date of Appointment</label>
          <input type="date" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" {...register("date", { required: "Date is required" })} />
          {errors.date && (
            <span className="text-red-500">{errors.date.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1">
          <label className="block mb-1 font-semibold">Symptom</label>
          <input type="text" className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none" placeholder="Symptom" {...register("symptom", { required: "At least one symptom is required" })} />
          {errors.symptom && (
            <span className="text-red-500">{errors.symptom.message}</span>
          )}
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Pay & Book</button>
      </div>
    </form>
  );
};

export default OfflineBookingForm;
