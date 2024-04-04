import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const SearchLocation = () => {
    const [location, setLocation] = useState("Delhi");

    return (
        <div className="flex flex-col gap-2 border-2 rounded-md mt-4 border-gray-500 w-full md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">

            <h1 className="text-xl ml-2">Find Doctors</h1>

            <div className="grid grid-cols-1 md:grid-cols-[1fr auto] py-2 mx-2">

                {/* <div className="mx-1">
                    <FontAwesomeIcon className="mx-1" icon={faLocationDot} />
                    <input type="text" className="my-2 text-xl mx-auto border-none outline-none" placeholder="Delhi" value={location} autoComplete="off" onChange={(e) => setLocation(e.target.value)} />
                    <hr />
                </div> */}

                <div className="mx-1 flex flex-col md:flex-row lg:flex-row items-center px-6">
                    <div className="flex w-full">
                        <FontAwesomeIcon className="my-auto mr-2" icon={faSearch} />
                        <input type="text" className="my-2 text-xl w-full border-none outline-none" placeholder="Search Doctors, Specialities, Symptoms etc." autoComplete="off" onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <button className="bg-blue-300 px-10  py-1 md:px-2 rounded-md hover:bg-blue-400 hover:shadow-lg"><FontAwesomeIcon className="my-auto" icon={faSearch} /></button>
                </div>
            </div>
        </div>
    )
};

export default SearchLocation;
