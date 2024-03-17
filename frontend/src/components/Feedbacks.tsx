import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Feedbacks = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:any) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <div className='flex w-fit py-10'>

    <h3 className='text-gray-600 text-3xl font-semibold items-center  mx-auto'>Very good app. Well thought out about booking/rescheduling/canceling an 
    appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</h3>
    </div>
    <p className='text-xl'><span className='mx-2'><FontAwesomeIcon icon={faUser} /></span>Amit Sharma</p>
    </Carousel.Item>
    <Carousel.Item>
        <div className='flex w-fit py-10'>

            <h3 className='text-gray-600 text-3xl font-semibold items-center  mx-auto'>Very good app. Well thought out about booking/rescheduling/canceling an 
            appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</h3>
        </div>
        <p className='text-xl'><span className='mx-2'><FontAwesomeIcon icon={faUser} /></span>Amit Sharma</p>
    </Carousel.Item>
    <Carousel.Item>
    <div className='flex w-fit py-10'>

    <h3 className='text-gray-600 text-3xl font-semibold items-center  mx-auto'>Very good app. Well thought out about booking/rescheduling/canceling an 
    appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</h3>
    </div>
    <p className='text-xl'><span className='mx-2'><FontAwesomeIcon icon={faUser} /></span>Amit Sharma</p>
    </Carousel.Item>
  </Carousel>
  )
}

export default Feedbacks;