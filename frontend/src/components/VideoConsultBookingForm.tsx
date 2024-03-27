import { useEffect, useState } from 'react'

const VideoConsultBookingForm = () => {
    const [problem,setProblem] = useState("");
    const [display,setDisplay] = useState(false);
    const [type,setType] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const doctorsTypes = ["Allergists","Anesthesiologists","Dermatologists","Infectious disease doctors","Ophthalmologists","Obstetrician/gynecologists","Cardiologists",
                        "Endocrinologists","Gastroenterologists","General Physician","Nephrologists","Urologists","Pulmonologists","Otolaryngologists","Neurologists","Psychiatrists",
                        "Oncologists","Radiologists","Rheumatologists","General surgeons","Orthopedic surgeons","Cardiac surgeons"];

    useEffect(()=>{
        if(problem.length >3){
            console.log(problem);
        }
    },[problem]);

    let data = {};

    const handleSubmit = ()=>{
        data = {...data,problem,type,phoneNumber}
        console.log(data);
    }

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-start'>
            <label className='text-4xl font-semibold tracking-tight'>Consult with a Doctor</label>
        </div>

        <div className='flex flex-col gap-2 items-start'>
            <label className='text-xl tracking-tight my-4'>
                Tell us your symptom or health problem
            </label>

            <div className='flex flex-col w-full items-start'>
            <textarea className='border-2 border-gray-200 outline-none w-full' placeholder='Eg:fever,headache...' onChange={(e)=> {
                if(e.target.value.length >4){
                    setProblem(e.target.value)
                    setDisplay(true);
                }
                }}>
            </textarea>
            <span className='text-gray-500 text-sm'>
                Min. 4 characters
            </span>

            </div>
        </div>

        <div className='flex flex-col gap-2'>
            <label className='text-xl tracking-tight'>
            A relevant speciality will be shown below...
            </label>

            {problem.length > 4 && display ?  (

            <div className='overflow-y-auto border-1 border-gray-200 h-32' style={{ scrollbarWidth: 'thin' }}>
                <div className='border-1 border-gray-800 py-2 px-2 w-full items-start justify-between flex flex-row'>
                    <span>Select any one of the value...</span>
                    <span><button onClick={()=> setDisplay(false)} className='bg-slate-200 p-1 hover:bg-slate-300'>✖️</button></span>
                    </div>
                {problem.length > 4 && doctorsTypes.map((type,index)=>(
                    <div key={index} className='border-1 border-gray-800 py-2 px-2 w-full items-start flex flex-col'>
                        <span className='font-semibold flex justify-between'>
                            <input type='checkbox' onChange={()=> {
                                setType(type);
                                setDisplay(false);
                            }}></input>
                            <span className='ml-2'>{type}</span>
                            <span className='ml-2'>₹ 499/-</span>
                        </span>
                    </div>
                ))}
            </div>
            ) : (
                <div className='flex py-2 w-full justify-between'>
                    <input className='w-full outline-none border-1 border-gray-300 py-1' value={type} type='text' placeholder='Doctor`s type'></input>
                    {type.length > 0 && (
                        <span><button onClick={()=> setType("")} className='bg-slate-200 py-2 px-1 hover:bg-slate-300'>✖️</button></span>
                    )}
                </div>
            )}

            <div className='flex flex-col gap-4 items-start'>
                <label className='text-xl tracking-tight'>Mobile Number</label>

                <div className='flex flex-col items-start'>
                <div className='py-2 border-gray-300 border-1 bg-slate-100 '>
                <span className="mx-2">+91<input onChange={(e)=> {
                    if(e.target.value.length === 10){
                        setPhoneNumber(e.target.value);
                    }
                }} className='mx-1 outline-none bg-slate-100' placeholder='Phone Number'></input></span>
                </div>
                <span className='text-gray-500 text-sm'>
                    Please enter correct mobile no.
                </span>
                </div>
            </div>

            <div className='flex items-start'>
                <button onClick={handleSubmit} className='py-2 px-3 my-2 text-2xl text-gray-200 bg-blue-500 rounded-sm hover:shadow-md hover:z-10 hover:bg-blue-600'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default VideoConsultBookingForm;