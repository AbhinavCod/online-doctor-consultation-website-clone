import { useMutation } from "react-query";
import * as apiClient from "../api-clients";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

const SignOutButton = ()=>{
    const navigate = useNavigate();
    // const {setDoctorStatus} = useAppContext();
    const mutation = useMutation(apiClient.logout,{
        onSuccess:()=>{
            // setDoctorStatus(false);
            console.log("Logout Successfully");
            navigate("/");
        },
        onError:()=>{
            console.log("Logout Failed");
        }
    })
    const handleClick = ()=>{
        mutation.mutate();
    }

    return(
        <button
        onClick={handleClick}
        className="text-xl font-semibold text-gray-600 py-3 w-full hover:bg-slate-200"
      >
        Sign out
      </button>
    )
};

export default SignOutButton;