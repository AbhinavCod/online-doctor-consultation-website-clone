import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import AppointmentCard from './AppointmentCard';

const Appointments = () => {
  return (

    
    <div className='flex  justify-between gap-3 '>
        <div className='flex'>
            <button><FontAwesomeIcon style={{fontSize:"2rem"}} icon={faArrowAltCircleLeft} /></button>
        </div>

                <AppointmentCard url='https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg'
                    type='Dentist'
                    detail='Teething Troubles? Schedule a dentist checkup'/>
            
                <AppointmentCard url='https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg'
                type='Dentist'
                detail='Teething Troubles? Schedule a dentist checkup'/>
            
                <AppointmentCard url='https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg'
                type='Dentist'
                detail='Teething Troubles? Schedule a dentist checkup'/>

            
                <AppointmentCard url='https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg'
                type='Dentist'
                detail='Teething Troubles? Schedule a dentist checkup'/>

                <AppointmentCard url='https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg'
                type='Dentist'
                detail='Teething Troubles? Schedule a dentist checkup'/>

        <div className="flex">
            <button ><FontAwesomeIcon style={{fontSize:"2rem"}} icon={faArrowAltCircleRight} /></button>
        </div>        
    </div>
  )
}

export default Appointments;