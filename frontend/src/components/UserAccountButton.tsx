import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import UserOptions from './UserOptions';

const UserAccountButton = () => {
    const [display,setDisplay] = useState(false);
  return (
    <>
    <div>
        <button className='py-2 text-xl' onClick={()=> setDisplay(!display)}><span></span><FontAwesomeIcon icon={faUser} /><FontAwesomeIcon icon={faAngleDown} /></button>
    </div>
        {display && (
            <UserOptions />
         )}
        </>
  )
}

export default UserAccountButton;