import { useEffect, useState } from 'react'

const VideoConsultBookingForm = () => {
    const [problem,setProblem] = useState("");
    const [type,setType] = useState("");
    const doctorsTypes = ["Allergists","Anesthesiologists","Dermatologists","Infectious disease doctors","Ophthalmologists","Obstetrician/gynecologists","Cardiologists",
                        "Endocrinologists","Gastroenterologists","Nephrologists","Urologists","Pulmonologists","Otolaryngologists","Neurologists","Psychiatrists",
                        "Oncologists","Radiologists","Rheumatologists","General surgeons","Orthopedic surgeons","Cardiac surgeons"];

    useEffect(()=>{
        if(problem.length >3){
            console.log(problem);
        }
    },[problem]);

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-start'>
            <label className='text-2xl font-semibold tracking-tight'>Consult with a Doctor</label>
        </div>

        <div className='flex flex-col gap-2 items-start'>
            <label className='text-xl tracking-tight'>
                Tell us your symptom or health problem
            </label>

            <div className='flex flex-col w-full items-start'>
            <textarea className='border-2 border-gray-200 outline-none w-full' placeholder='Eg:fever,headache...' onChange={(e)=> setProblem(e.target.value)}>
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

            {problem.length > 4 && (

            <div className='overflow-y-auto border-1 border-gray-200 h-32' style={{ scrollbarWidth: 'thin' }}>
                {problem.length > 4 && doctorsTypes.map((type,index)=>(
                    <div key={index} className='border-1 border-gray-800 py-2 px-2 w-full items-start flex flex-col'>
                        <span className='font-semibold flex justify-between'>
                            <input type='checkbox'></input>
                            <span className='ml-2'>{type}</span>
                            <span className='ml-2'>₹ 499/-</span>
                        </span>
                    </div>
                ))}
            </div>
            )}

            <div className='flex flex-col gap-4 items-start'>
                <label className='text-xl tracking-tight'>Mobile Number</label>
                <div className='py-2 border-gray-300 border-1 bg-slate-100 '>
                <span className="mx-2">+91<input className='mx-1 outline-none bg-slate-100' placeholder='Phone Number'></input></span>
                </div>
            </div>

            <div className='flex items-start'>
                <button className='py-2 px-3 my-2 text-2xl text-gray-200 bg-blue-500 rounded-sm hover:shadow-md hover:z-10 hover:bg-blue-600'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default VideoConsultBookingForm;