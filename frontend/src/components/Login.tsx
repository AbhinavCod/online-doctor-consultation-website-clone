import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import * as apiClient from "../api-clients";
import toast from 'react-hot-toast';

export type LoginFormData = {
    email:string;
    password:string;
}

const Login = () => {
    const navigate = useNavigate();
    const mutation = useMutation(apiClient.login,{
        onSuccess:(data)=>{
            console.log(data);
            toast.success("Login Successfull");
            console.log("Login Successfull");
            navigate("/");
        },
        onError:()=>{
            toast.error("Login Failed");
            console.log("Login Failed");
        }
    })
    const {register,handleSubmit,formState:{errors}} = useForm<LoginFormData>();

    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        mutation.mutate(data);
    })
    
  return (
    <div className='flex flex-col border-2 border-gray-400 shadow-xl rounded z-10 my-4 bg-slate-100' style={{width:"32rem",height:"30rem"}}>
        <div className='text-gray-600 text-2xl my-2'>
            Login
        </div>
        <hr></hr>
        <form className='flex flex-col items-start mt-2' onSubmit={onSubmit}>

            <label className='text-xl ml-8 font-bold text-gray-600 py-2 px-2 mb-2 my-auto'>Email Id</label>
            <input type='email' placeholder='Full Name/Email Id' className='outline-none border-1  border-gray-300 py-2 px-2 mb-6 ml-10 w-96' {...register("email",{
                required:"Valid Email is required",
                validate:{
                    matchPattern : (value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Invalid Email Id"
                }
            })}></input>{errors.email && (
                <span className='text-red-500 ml-10'>{errors.email.message}</span>
            )}


            <label className='text-xl ml-8 font-bold text-gray-600 py-2 px-2 mb-2 my-auto'>Password</label>
            <input type='password' placeholder='Password' className='outline-none border-1 border-gray-300 py-2 px-2 ml-10 mb-3 w-96' {...register("password",{
                required:"Password is required",
                minLength:{
                    value:8,
                    message:"Password must contain atleast 8 characters"
                }
            })}></input>{errors.password && (
                <span className='text-red-500 ml-10'>{errors.password.message}</span>
            )}

            <div className='flex justify-between items-center pt-6'>
                <div className='ml-10'><input className='mx-2' type='checkbox'></input>Remember Me for 30 days</div>
                <div className='text-blue-500 hover:underline'><Link className='ml-10 hover:text-blue-600' to={"/forgot-password"}>Forgot Password?</Link></div>
            </div>

            <div className='flex items-center'>
                <button type='submit' className='bg-blue-400 text-xl text-white py-3 my-4 ml-10 w-96 hover:bg-blue-600'>Login</button>
            </div>
            
        </form>

    </div>
  )
}

export default Login;