import {useEffect, useState} from 'react'
import { useMutation } from 'react-query';
import * as apiClient from "../api-clients";
import { useAppContext } from '../context/AppContext';
import OfflineAppointmentCard from '../components/OfflineAppointmentCard';

interface Appointment {
  fullName:string,
  disease:string,
  symptom:string,
  date:string;
  details:string,
  phoneNumber:string,
  email:string
}



const AppointmentsPage = () => {
  const [appointments,setAppointments] = useState<Appointment[]>([]);
  const {email} = useAppContext();

  const mutation = useMutation(apiClient.getAppointmentsArray,{
    onSuccess:(data)=>{
      console.log(typeof(data));
      // appointments = [...data]
      setAppointments(data);
      console.log(appointments);
    },
    onError:()=>{
      console.log("Error while fetching offline-appointments");
    },
  })


  useEffect(()=>{

    mutation.mutate(email);
  },[email]);
  return (
    <div className='flex flex-col items-center mt-6 rounded-md gap-4 my-4'>
      <div className='text-3xl font-semibold text-gray-700 tracking-tight'>Hello, {appointments[0]?.fullName}</div>
      <div className='text-3xl font-semibold text-gray-700 tracking-tight mb-4'>Thank you for booking appointments on 24Ourdr. Here are the details of your appointments.</div>


      {appointments ? ( appointments.map((appointment)=> (
        <div>
          <OfflineAppointmentCard fullName={appointment.fullName} disease={appointment.disease} symptom={appointment.symptom} details={appointment.details} date={appointment.date}
          phoneNumber={appointment.phoneNumber} email={appointment.email} />
          </div>
      )) )
      :
      (
        <div className='flex flex-col items-center'>
          <div><img src="fullName:string,disease:string,symptom:string,date:string;details:string,phoneNumber:string,email:string" alt="" /></div>
          <div className='text-2xl text-gray-600 tracking-tight'>Sorry, you don't have any appointments</div>
        </div>
      )}
      
    </div>
  )
}

export default AppointmentsPage;