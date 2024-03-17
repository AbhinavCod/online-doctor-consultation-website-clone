import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-clients";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export type OfflineBookingFormData = {
  fullName:string,
  disease:string,
  symptom:string,
  date:Date;
  details:string,
  phoneNumber:string,
  email:string
}

const OfflineBookingForm = () => {
  const {setId,setSecret,setAmount} = useAppContext();
  const navigate = useNavigate();
  const mutation1 = useMutation(apiClient.offlineBooking,{
    onSuccess: async (data)=>{
      console.log("Booking Done , pls pay the amount to confirm");
      const d = await data;
      console.log(d);
      
    },
    onError:()=>{
      console.log("Booking Failed, try later");
    },
  });

  const mutation2 = useMutation(apiClient.createPaymentIntent,{
    onSuccess:(data)=>{
      console.log(data);
      setId(data.paymentIntentId);
      setSecret(data.clientSecret);
      setAmount(data.price);
      console.log("Payment Intent Created");
      navigate("/confirmPayment");
    },
    onError:()=>{
      console.log("Payment Intent creation failed");
    }
  })
  
    const {register,handleSubmit,formState:{errors}} = useForm<OfflineBookingFormData>();

    const onSubmit = handleSubmit((data)=>{
      console.log(data);
      mutation1.mutate(data);
      mutation2.mutate(data);
    })

  return (
    <form className="flex flex-col gap-6 mt-16" onSubmit={onSubmit}>
      

      <div className="flex gap-3">

      <div className="flex flex-col">
          <label className="text-xl  tracking-tight"><input type="text" className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="Full Name" {...register("fullName",{
            required:"Full Name is required"
          })}></input></label>

{errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}

      </div>

    <div className="flex flex-col">
          <label className="text-xl tracking-tight"><input type="phonenumber" className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="Phone Number" {...register("phoneNumber",{
            required:"Phone Number is required",
            minLength:{
              value:10,
              message:"Invalid Phone Number"
            },
            maxLength:{
              value:10,
              message:"Invalid Phone Number"
            }
          })}></input></label>{errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}

    </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col">
          <label className="text-xl tracking-tight"><input type="text" className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="Disease" {...register("disease",{
              required:"Disease type required"
            })}></input></label>{errors.disease && (
              <span className="text-red-500">{errors.disease.message}</span>
            )}
        </div>

            <div className="flex flex-col">

            <label className="text-xl tracking-tight"><input type="email" className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="Email Id" {...register("email",{
                required:"Email is required",
                validate:{
                  matchPattern : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Invalid Email Id"
              }
              })}></input></label>{errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <label className="text-xl tracking-tight "><input type="text" className="rounded-md py-1 px-3 outline-none" style={{width:"37rem"}} placeholder="Detail Disease Description" {...register("details",{
                required:"Please provide a bit detail about description"
              })}></input></label>{errors.details && (
                <span className="text-red-500">{errors.details.message}</span>
              )}

        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col">
            <label className="text-xl tracking-tight "><input type="date" className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="" {...register("date",{
                required:"Date is required"
              })}></input></label>{errors.date && (
                <span className="text-red-500">{errors.date.message}</span>
              )}

        </div>

        <div className="flex flex-col">
          <label className="text-xl ml- tracking-tight "><input className="rounded-md py-1 px-3 outline-none" style={{width:"18rem"}} placeholder="Symptom" {...register("symptom",{
              required:"Atleast one symptom is required"
            })}></input></label>{errors.symptom && (
              <span className="text-red-500">{errors.symptom.message}</span>
            )}
        </div>
      </div>

      <div className="flex w-full items-cnter">
          <button type="submit" className="mx-auto bg-white text-blue-600 text-xl font-bold px-3 rounded-md py-2 hover:rounded-3xl hover:text-blue-700">Pay & Book </button>
      </div>

    </form>
  )
}

export default OfflineBookingForm;