import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import * as apiClient from "../api-clients";
import { useAppContext } from '../context/AppContext';

export type SignUpData = {
    fullName : string;
    email : string;
    password : string;
    confirmPassword : string;
}

type Props = {
    doctor : boolean;
}


const RegisterationForm = ({doctor}:Props) => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm<SignUpData>();
    const {setEmailId} = useAppContext();


    const mutation1 = useMutation(apiClient.signup,{
        onSuccess:()=>{
            console.log("Registered Successfully Patient");
            navigate("/");
        },
        onError:()=>{
            console.log("Registration Failed");
        }
    })

    const mutation2 = useMutation(apiClient.signupDoctor,{
        onSuccess:()=>{
            console.log("Registered Successfully Doctor");
            navigate("/");
        },
        onError:()=>{
            console.log("Registration Failed");
        }
    })
   

    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        setEmailId(data.email);
        if(!doctor){
            mutation1.mutate(data);
        }
        else{
            mutation2.mutate(data);
        }
    })
  return (
    <form className='flex flex-col items-start mt-4' onSubmit={onSubmit}>

    <label className='text-xl ml-8 font-bold text-gray-600 py-2 px-2 my-auto'>Full Name</label>
        <input type='text' placeholder='Full Name' className='outline-none border-1  border-gray-300 py-2 px-2 mb-2 ml-10 w-96' {...register("fullName",{
            required:"Full Name is required",
        })}></input>{errors.fullName && (
            <span className='text-red-500 ml-10'>{errors.fullName.message}</span>
        )}

    <label className='text-xl ml-8 font-bold text-gray-600 py-2 px-2 my-auto'>Email Id</label>
        <input type='email' placeholder='Email Id' className='outline-none border-1  border-gray-300 py-2 px-2 mb-2 ml-10 w-96' {...register("email",{
            required:"Valid Email is required",
            validate:{
                matchPattern : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Invalid Email Id"
            }
        })}></input>{errors.email && (
            <span className='text-red-500 ml-10'>{errors.email.message}</span>
        )}
    <label className='text-xl ml-8 font-bold text-gray-600 py-2 px-2 my-auto'>Create Password</label>
        <input type='password' placeholder='Password' className='outline-none border-1  border-gray-300 py-2 px-2 mb-2 ml-10 w-96' {...register("password",{
            required:"Password is required",
            minLength:{
                value:8,
                message:"Password must be atleast 8 characters long."
            }
        })}></input>{errors.password && (
            <span className='text-red-500 ml-10'>{errors.password.message}</span>
        )}

<div className='flex items-start'>
            <span className='ml-10 my-1'>By Signing up, I agree to the <Link className='text-blue-500 hover:underline' to={"/"}>terms & conditions</Link></span>
        </div>

        <div className='flex items-center'>
                <button type='submit' className='bg-blue-400 text-xl text-white py-2 my-4 ml-10 w-96 hover:bg-blue-600'>Register Me</button>
        </div>

    </form>
  )
}

export default RegisterationForm