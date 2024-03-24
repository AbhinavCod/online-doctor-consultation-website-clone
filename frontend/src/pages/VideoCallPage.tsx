import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMessage, faPaperPlane, faPenToSquare, faSquareCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import CarouselItems from '../components/CarouselItems';

const VideoCallPage = () => {
    
  return (<>
    <div className='flex flex-col'>

        <div className='grid md:grid-cols-[2fr_2fr] mt-4 p-6' style={{backgroundColor:"#f8e9e6"}}>
            <div className='flex flex-col gap-2 items-start'>
                <h1 className='text-4xl text-gray-800 tracking-tight font-semibold ml-8 pt-6'>Skip the travel!</h1>
                <h1 className='text-4xl text-gray-800 tracking-tight font-semibold ml-8 '>Take Online Doctor Consultation</h1>
                <p className='text-2xl text-gray-700 tracking-tight  ml-8 py-2 '>Private consultation + Audio call · Starts at just ₹199</p>

                <div className='flex ml-8'>
                    <span style={{height:"42px",width:"42px",borderRadius:"50%",overflow:"hidden",border:"3px solid white",position:"relative",display:"inline-block"}}><img src="https://images1-fabric.practo.com/doctor/541644/dr-jatinder-sachdeva-5a9cc148c6bbb.jpg/thumbnail" alt="" /></span>
                    <span style={{height:"42px",width:"42px",borderRadius:"50%",overflow:"hidden",border:"3px solid white",position:"relative",display:"inline-block"}} >
                        <img src="https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-sidharth-verma-1482421214-585bf3deb1bf3.jpg/thumbnail" alt="" /></span>
                    <span style={{height:"42px",width:"42px",borderRadius:"50%",overflow:"hidden",border:"3px solid white",position:"relative",display:"inline-block"}}>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-pankaj-kumar-1475218773-57ee0d55b4559.jpg/thumbnail" alt="" /></span>

                    <span className='my-auto mx-2 text-xl'>+163 Doctors are online 🟢</span>
                </div>

                <div className='flex ml-8 py-3'>
                    <Link to={"/consultNow"}><button className='bg-blue-500 py-2 px-3 text-xl text-white rounded-md hover:bg-blue-600 hover:shadow-md hover:z-10'>Consult Now</button></Link>
                </div>

                <div className='flex mt-auto gap-4'>
                    <span><FontAwesomeIcon icon={faSquareCheck} /> Verified Doctors</span>
                    <span><FontAwesomeIcon icon={faPenToSquare} /> Digital Prescription</span>
                    <span><FontAwesomeIcon icon={faRocketchat} /> Free FollowUp</span>
                </div>

            </div>

            <div>
                <img src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png" alt="" />
            </div>

        </div>
    </div>

    <div className='flex flex-col items-start my-6 mt-12 gap-3'>
        <div className='flex text-4xl font-semibold text-gray-800 ml-10'>
            Some Common Issues in day-to-day life
        </div>
        <div className='flex text-2xl font-semibold text-gray-700 ml-10 justify-between'>
            
            Some Common Issues in day-to-day life
        </div>
    </div>


    <CarouselItems />

    <div className='flex flex-col gap-4 my-6'>
        <div className='text-4xl font-semibold text-gray-800 my-4'>
                How it works ?
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
                <span style={{fontSize:"2rem"}}><FontAwesomeIcon icon={faPaperPlane} /></span>
                <span className='text-xl'>Select a speciality or symptom</span>
            </div>

            <div style={{fontSize:"3rem"}}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className='flex flex-col gap-2'>
                <span style={{fontSize:"2rem"}}><FontAwesomeIcon icon={faMessage} /></span>
                <span className='text-xl'>Audio/ video call with a verified doctor</span>
            </div>

            <div style={{fontSize:"3rem"}}>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className='flex flex-col gap-2'>
                <span style={{fontSize:"2rem"}}><FontAwesomeIcon icon={faUserPlus} /></span>
                <span className='text-xl'>Get a digital prescription & a free follow-up</span>
            </div>

        </div>

    </div>


    <div className='flex justify-between bg-gray-800 rounded-md my-20 py-6'>
        <div className='flex flex-col gap-2 px-8 py-2'>
            <span className='text-2xl text-white'>2,00,000+</span>
            <span className='text-2xl text-white'>Happy users</span>
        </div>
        <div className='flex flex-col gap-2 px-8 py-2'>
            <span className='text-2xl text-white'>20,000+</span>
            <span className='text-2xl text-white'>Verified Doctors</span>
        </div>
        <div className='flex flex-col gap-2 px-8 py-2'>
            <span className='text-2xl text-white'>25+</span>
            <span className='text-2xl text-white'>Specialities</span>
        </div>
        <div className='flex flex-col gap-2 px-8 py-2'>
            <span className='text-2xl text-white'>4.5/5</span>
            <span className='text-2xl text-white'>Ratings</span>
        </div>
       

    </div>


    <div className='flex flex-col gap-10 items-start my-16'>
        <div className='text-4xl text-gray-800 font-semibold'>
            Benefits of Online Consultation
        </div>

        <div className='w-full h-full boder-1 border-gray-500 shadow-md rounded-md z-10 flex flex-wrap my-12'>
            <div className='flex flex-col gap-4 flex-wrap items-start p-4' style={{width:"33%"}}>
                <h1 className='text-2xl text-gray-700 font-semibold'>✔️Consult Top Doctors 24*7</h1>
                <p className='text-xl text-gray-600'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
            </div>

            <div className='flex flex-col gap-4 flex-wrap items-start p-4' style={{width:"33%"}}>
                <h1 className='text-2xl text-gray-700 font-semibold'>✔️Convenient and Easy</h1>
                <p className='text-xl text-gray-600'>Start an instant consultation within 2 minutes or do video consultation at the scheduled time.</p>
            </div>
            <div className='flex flex-col gap-4 flex-wrap items-start p-4' style={{width:"33%"}}>
                <h1 className='text-2xl text-gray-700 font-semibold'>✔️100% Safe Consultations</h1>
                <p className='text-xl text-gray-600'>Be assured that your online consultation will be fully private and secured.</p>
            </div>
            <div className='flex flex-col gap-4 flex-wrap items-start p-4' style={{width:"33%"}}>
                <h1 className='text-2xl text-gray-700 font-semibold'>✔️Similar Clinic Experience</h1>
                <p className='text-xl text-gray-600'>Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app.</p>
            </div>
            <div className='flex flex-col gap-4 flex-wrap items-start p-4' style={{width:"33%"}}>
                <h1 className='text-2xl text-gray-700 font-semibold'>✔️Free Follow-up</h1>
                <p className='text-xl text-gray-600 '>Get a valid digital prescription and a 7-day, free follow-up for further clarifications.</p>
            </div>
            

        </div>

    </div>

            </>
  )
}

export default VideoCallPage;