import { useEffect, useState } from 'react';
import AvailableDoctorsList from '../components/AvailableDoctorsList';
import SearchDoctor from '../components/SearchDoctor';

type Info = {
    fullName:string,
    clinicAddress:string,
    degree:string,
    phoneNumber:string,
    type:string,
    email:string,
    experience:string,
    imageUrls:string[],
    city:string,
}

const FindDoctorPage = () => {
  const [list,setList] = useState<Info[]>([]);

  useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetch("/api/doctor/get-doctor",{
          method:"GET",
          credentials:"include",
          headers:{
            "Content-Type":"application/json"
          }
        });

        const data = await response.json();
        setList(data);
        console.log(list);
    }

    fetchData();
  })
  return (
    <>
    <div className='flex flex-col'>

        <div className='flex items-center justify-center my-2 w-full relative h-32' style={{backgroundColor:"#034154"}}>
            <h1 className='text-3xl text-white tracking-tight'>Search For Doctors Around You...</h1>
            <div className='absolute mt-48 h-32  rounded-sm flex justify-evenly items-center w-full shadow-xl z-10' style={{backgroundColor:"#dcf3f7",width:"90%"}}>
                <SearchDoctor />
            </div>
        </div>
    </div>


        <div className='flex flex-col gap-4 mt-28'>
          <div className='my-2'>
            <label className='text-3xl text-gray-600 tracking-tight'>List of popular available doctors.</label>
          </div>


        {list.length >0 && list.map((data)=> (
          <AvailableDoctorsList fullName={data.fullName} email={data.email} clinicAddress={data.clinicAddress} degree={data.degree} 
          phoneNumber={data.phoneNumber} type={data.type} experience={JSON.stringify(data.experience)} url={data.imageUrls[0]} city={data.city}/>
            
        ))}
          
        </div>

    </>      
  )
}

export default FindDoctorPage;