// import { Link } from "react-router-dom";
// import image from "../../public/images/logo-color.png";
// import { useAppContext } from "../context/AppContext";
// import UserAccountButton from "./UserAccountButton";

// const Header = ()=>{
//     const {isLoggedIn} = useAppContext();

//     return (<>
//         <div  className="top-0 relative z-0 w-full my-0 py-0 h-24 border-md bg-white flex justify-between items-center">

//             <div className="ml-4">
//                 <Link to={"/"}><img className="w-30 mx-auto" style={{height:"9rem"}} src={image} alt="Logo"></img></Link>
//             </div>

//             <div className="flex gap-10">
//                 <>
//                 <Link to={"/findDoctor"} className="text-2xl hover:text-gray-600 py-2 px-2">Find Doctors</Link>
//                 <Link to={"/videoCall"} className="text-2xl hover:text-gray-600 py-2 px-2">Video Consult</Link>
//                 <Link to={"/"} className="text-2xl hover:text-gray-600 py-2 px-2">Medicines</Link>
//                 <Link to={"/"} className="text-2xl hover:text-gray-600 py-2 px-2">Lab Tests</Link>
//                 <Link to={"/"} className="text-2xl hover:text-gray-600 py-2 px-2">Surgeries</Link>
//                 </>
//             </div>

//             <div className="flex gap-8 mr-12">
//                 <Link to={"/"} className="text-2xl hover:text-gray-600 py-2 px-2 dropdown-toggle">For Corporates</Link>
//                 <Link to={"/"} className="text-2xl hover:text-gray-600 py-2 px-2 dropdown-toggle">Security/Help</Link>
                
//                 {isLoggedIn ? (
//                     <UserAccountButton /> 
//                     ):( 
//                      <button className="border-2 rounded-md hover:border-blue-500 border-gray-600"><Link to={"/login"} className="text-xl hover:text-blue-600 py-2 px-2">Login/SignUp</Link></button>
//                  )} 

//             </div>
            
//         </div>
//         <hr className="z-10"></hr>
//     </>
//     )
// };

// export default Header;

import { Link } from "react-router-dom";
import image from "../../public/images/logo-color.png";
import { useAppContext } from "../context/AppContext";
import UserAccountButton from "./UserAccountButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
const {isDoctor} = useAppContext();
console.log(isDoctor);


  return (
    <>
      <div className="top-0 relative z-0 w-full my-0 py-0 h-24 border-md bg-white flex justify-between items-center">
        <div className="ml-4">
          <Link to={"/"}>
            <img
              className="w-24 sm:w-32"
              style={{ height: "6rem" }}
              src={image}
              alt="Logo"
            ></img>
          </Link>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="block sm:hidden text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex gap-10">
          <Link to={"/bookAppointment"} className="text-xl hover:text-gray-600">
            Book Appointments
          </Link>
          <Link to={"/videoCall"} className="text-xl hover:text-gray-600">
            Video Consult
          </Link>
          <Link to={"/"} className="text-xl hover:text-gray-600">
            Medicines
          </Link>
          <Link to={"/"} className="text-xl hover:text-gray-600">
            Lab Tests
          </Link>
          <Link to={"/"} className="text-xl hover:text-gray-600">
            Surgeries
          </Link>
          <Link to={"/findDoctor"} className="text-xl hover:text-gray-600">
            Find Doctor
          </Link>
            <Link to={"/addDoctor"} className="text-xl hover:text-gray-600">
            Add new Doctor
          </Link>
        </div>

        <div className="flex gap-8 mr-4 sm:mr-12">
          {isLoggedIn ? (
            <UserAccountButton />
          ) : (
            <button className="border-2 rounded-md hover:border-blue-500 border-gray-600">
              <Link
                to={"/login"}
                className="text-xl hover:text-blue-600 py-2 px-2"
              >
                Login/SignUp
              </Link>
            </button>
          )}
        </div>
      </div>
      <hr className="z-10"></hr>
    </>
  );
};

export default Header;

