
type Props = {
    fullName:string,
  disease:string,
  symptom:string,
  date:string;
  details:string,
  phoneNumber:string,
  email:string
}

const OfflineAppointmentCard = ({fullName,disease,symptom,date,details,phoneNumber,email}:Props) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 bg-slate-100 shadow-md z-10 rounded-xl overflow-hidden" style={{width:"48"}}>

        <div className="flex flex-col items-center bg-blue-700">
            <p className="text-white text-2xl font-semibold py-3 ">Confirmed Appointment</p>
        </div>

        <div className="flex flex-col items-start mx-12 my-12 gap-4">
            <label className="text-xl">⁕ Full Name : {fullName}</label>
            <label className="text-xl">⁕ Emal Id : {email}</label>
            <label className="text-xl">⁕ Phone Number : {phoneNumber}</label>
            <label className="text-xl">⁕ Date of Appointment : {date}</label>
            <label className="text-xl">⁕ Patient's Problem : {disease}</label>
            <label className="text-xl">⁕ General Details : {details}</label>
            <label className="text-xl">⁕ Primary Symptoms : {symptom}</label>
        </div>

        <hr></hr>

        <div className="flex flex-col items-start mx-4 my2">
            <p className="text-xl text-gray-600">If you are not able to make it to the appointment, please cancel or reschedule. It will open this </p>
            <p className="text-xl text-gray-600">valuable slot for others waiting to visit the doctor.</p>
        </div>

        <div className="flex gap-16 items-center mx-auto">
            <button className="bg-blue-500 py-2 px-6 rounded my-2 text-white text-xl hover:shadow-xl hover:bg-blue-600 hover:z-10">Cancel</button>
            <button className="bg-blue-500 py-2 px-6 rounded my-2 text-white text-xl hover:shadow-xl hover:bg-blue-600 hover:z-10">Reschedule</button>
        </div>
    </div>
  )
}

export default OfflineAppointmentCard;