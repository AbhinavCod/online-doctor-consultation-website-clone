import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


const UserOptions = () => {
   
  return (
    <>
    
    <span className="flex flex-col z-20 absolute bg-white" style={{top:"4.1rem",right:"5rem"}}><FontAwesomeIcon icon={faAngleUp}  className="text-xl mt-auto"/></span>
   
    <div className='flex flex-col absolute border-2 border-gray-400 shadow-xl z-10 bg-white' style={{width:"15rem",top:"5rem",right:"2rem"}}>
        <div className="flex flex-col ">
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/appointmentsPage"}>My Appointments</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>My Tests</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>My Medicine Orders</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>My Medical Orders</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>My Online Consultations</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>View/Update Profile</Link>
            <Link className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200" to={"/"}>My Feedback</Link>
            <SignOutButton />
        </div>

    </div>
    </>
  )
}
export default UserOptions;