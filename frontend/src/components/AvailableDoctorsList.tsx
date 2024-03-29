import { Link } from "react-router-dom";

type Props = {
    fullName:string,
    clinicAddress:string,
    degree:string,
    phoneNumber:string,
    type:string,
    email:string,
    experience:string,
    url:string,
    city:string
}

const AvailableDoctorsList = ({fullName,clinicAddress,degree,phoneNumber,type,email,experience,url,city}:Props) => {
  return (
    <div className="py-2">
        <div className="grid md:grid-cols-[1fr_2fr] items-center border-1 border-gray-400 p-6 rounded-md">

            <div className="flex flex-col items-center w-full">
                <div className="relative border-4  overflow-hidden object-cover h-36 mt-6 w-36" style={{borderRadius:"50%",borderColor:"#034154"}}>
                    <img src={url} alt="" />
                </div>
                <div className="bg-gray-800 rounded-2xl gap-2 px-10 py-2 absolute mt-32">
                    <h1 className="text-xl text-white tracking-tight">Dr. {fullName}</h1>
                    <h1 className="text-md text-blue-400">{type}</h1>
                </div>

                <div className="flex flex-col mt-8 w-full gap-2">
                    <span className="text-xl font-semibold ">ID No. : 1002546</span>
                    <span className="text-xl font-semibold">License No. : 1002546</span>
                    <span className="text-xl font-semibold">{city}</span>
                </div>


                <div className="flex flex-row gap-4 mt-4 justify-between">
                    <Link to={"/bookAppointment"} className="bg-blue-600 text-white text-xl px-2 py-1 rounded-md hover:shadow-xl hover:bg-blue-700 hover:z-10">Book Appointment</Link>
                    <Link to={"/videoCall"} className="bg-blue-600 text-white text-xl px-2 py-1 rounded-md hover:shadow-xl hover:bg-blue-700 hover:z-10">Call Now...</Link>
                </div>


            </div>
            
            <div  className="border-l border-gray-400 mx-6 h-full" >
                <div className="flex flex-col w-full items-center justify-center">
                    
                    <div className="flex flex-row w-full py-4 ml-8 bg-gray-800">
                        <div className="flex mx-auto">
                            <label className="text-3xl text-white">Doctor's general information</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 my-2">
                        <label className="text-2xl font-semibold">Contact Number :</label>
                        <h1 className="text-xl">+91-{phoneNumber}</h1>
                        <hr className="w-full"></hr>
                    </div>
                    
                    <div className="flex flex-col gap-2 my-2">
                        <label className="text-2xl font-semibold">Clinic Address :</label>
                        <p className="text-xl">{clinicAddress}</p>
                        <hr></hr>
                    </div>

                    <div className="flex flex-col gap-2 my-2">
                        <label className="text-2xl font-semibold">Email Id :</label>
                        <p className="text-xl">{email}</p>
                        <hr></hr>
                    </div>

                    <div className="grid md:grid-cols-[2fr_2fr]">
                        <div className="flex flex-col gap-2 my-2">
                            <label className="text-2xl font-semibold">Experience (in yrs) :</label>
                            <p className="text-xl">+{experience} years</p>
                            <hr></hr>
                        </div>
                        <div className="flex flex-col gap-2 my-2">
                            <label className="text-2xl font-semibold">Qualifications :</label>
                            <p className="text-xl">{degree}</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvailableDoctorsList;