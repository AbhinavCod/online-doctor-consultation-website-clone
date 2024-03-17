import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchLocation = ()=>{
    const [location,setLocation] = useState("Delhi");
    return(
        <div className="flex flex-col gap-2 border-2 rounded-md mt-4 border-gray-500" style={{width:"50rem"}}>

            <h1 className="text-xl mr-auto ml-2">Find Doctors</h1>

            <div className="grid grid-cols-[1fr_2fr] py-2 mr-auto ml-2">

                <div className="mx-1">
                    <FontAwesomeIcon className="mx-1" icon={faLocationDot} />
                    <input type="text" className="my-2 text-xl mx-auto border-none outline-none" placeholder="Delhi" value={location} autoComplete="off" onChange={(e)=>setLocation(e.target.value)}></input>
                    <hr></hr>
                </div>

                <span>
                <div className="mx-1 flex flex-row">
                    <FontAwesomeIcon className="left-0 my-auto mr-2" icon={faMagnifyingGlass} />
                    <input type="text" className="my-2 text-xl mr-auto w-full border-none outline-none" placeholder="Search Doctors,Specialities,Symptoms etc."  autoComplete="off" onChange={(e)=>setLocation(e.target.value)}></input>
                    
                </div>
                <hr></hr>
                </span>
        
            </div>
            
        </div>
    )
};

export default SearchLocation;