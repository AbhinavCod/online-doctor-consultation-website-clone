import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/images/logo-black.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 bg-blue-700 w-full justify-between mt-auto'>

            <div className="flex  h-24">
                <img className='mx-12 my-2'  src={image} style={{height:"9rem",borderRadius:"70%",marginRight:"auto"}} alt="" />
           

            <div>
                <Link to={"/"}><button className='py-12 px-12 text-gray-200 text-xl hover:text-white hover:underline'><span className="mx-2"><FontAwesomeIcon icon={faLinkedin} /></span>Instagram</button></Link>
                <Link to={"/"}><button className='py-12 px-12 text-gray-200 text-xl hover:text-white hover:underline'><span className="mx-2"><FontAwesomeIcon icon={faInstagram} /></span>Linkedin</button></Link>
                <Link to={"/"}><button className='py-12 px-12 text-gray-200 text-xl hover:text-white hover:underline'><span className="mx-2"><FontAwesomeIcon icon={faLock} /></span>Privacy Policy</button></Link>
                <Link to={"/"}><button className='py-12 px-12 text-gray-200 text-xl hover:text-white hover:underline'><span className="mx-2"><FontAwesomeIcon icon={faAddressBook} /></span>Contact Us</button></Link>
                <Link to={"/"}><button className='py-12 px-12 text-gray-200 text-xl hover:text-white hover:underline'><span className="mx-2"><FontAwesomeIcon icon={faUser} /></span>About Us</button></Link>

            </div>
            </div>

        <div className='text-gray-200 text-xl my-2 mb-4'>Copyright © 2017, 24OurDr. All rights reserved.</div>

    </div>
  )
}

export default Footer;