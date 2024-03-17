import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
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
                    <Link to={"/"}><button className='bg-blue-500 py-2 px-3 text-xl text-white rounded-md hover:bg-blue-600 hover:shadow-md hover:z-10'>Consult Now</button></Link>
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

    <CarouselItems />

            </>
  )
}

export default VideoCallPage;