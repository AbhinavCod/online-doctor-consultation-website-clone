import VideoConsultBookingForm from '../components/VideoConsultBookingForm';

const ConsultDoctor = () => {
  return (
    <div className='flex flex-col gap-8 items-center border-gray-500 z-10 border-2 shadow-xl my-4 '>
       <div className="grid md:grid-cols-[2fr_2fr]  border-gray-400">

        <div className="flex flex-col items-startn gap-6 w-full">
            <VideoConsultBookingForm />
        </div>

        <div className="flex items-center justify-center w-full h-full">

           <img src="https://www.practo.com/consult/bundles/cwipage/images/qualified_doctors.png" alt="" />

        </div>
       </div>
       
    </div>
  )
}

export default ConsultDoctor;