import { useState } from "react";
import RegisterationForm from "./RegisterationForm";
import { useAppContext } from "../context/AppContext";

const Register = () => {
    const [doctor,setDoctor] = useState(true);
    const {setDoctorStatus} = useAppContext();
    setDoctorStatus(doctor);
    
  return (
    <div className='flex flex-col border-2 border-gray-400 shadow-xl rounded z-10 my-4 bg-slate-100' style={{width:"32rem",height:"30rem"}}>
        <div className='flex justify-between'>
            <div className='ml-4 my-2 text-gray-600 text-xl'>Join 24OurDr.</div>
            {doctor ? (
                <div><button className='text-gray-600 my-2 mr-4 hover:text-blue-600' onClick={()=> setDoctor(!doctor)}>Not a doctor</button></div>
            ):(
                <div className='text-gray-700 my-2 mr-4'>Are you a doctor? <button onClick={()=> setDoctor(!doctor)} className='text-blue-500 hover:text-blue-600 hover:underline'>Register Here</button></div>
            )}
        </div>
        <hr></hr>

        <RegisterationForm doctor={doctor} />
       
    </div>
  )
}

export default Register;