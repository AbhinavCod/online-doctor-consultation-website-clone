// import { Link } from "react-router-dom";
// import Facilities from "../components/Facilities";
// import SearchLocation from "../components/SearchLocation";
// import Specialities from "../components/Specialities";
// import Appointments from "../components/Appointments";
// import Feedbacks from "../components/Feedbacks";

// const Home = ()=>{
//     return(
//         <div className="flex flex-col gap-5 items-center">
//             <SearchLocation />
//             <div className="py-10">
//                 <img src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="Image"></img>
//             </div>

//             <Facilities />

//             <div className="flex flex-col gap-2 py-10 w-full">
//                 <div className="flex justify-between">
//                     <div className="flex flex-col items-start">
//                         <p className="text-2xl text-gray-600 font-bold">Consult top doctors online for any health concern</p>
//                         <p className="text-xl text-gray-600 font-semibold">Private online consultations with verified doctors in all specialists</p>
//                     </div>

//                     <div>
//                     <button className="border-2 rounded-md hover:border-blue-500 border-gray-600 h-16">
//                         <Link to={"/"} className="text-xl hover:text-blue-600 py-2 px-2">View All Specialities</Link>
//                     </button>
//                     </div>

//                 </div>

//                 <div className="py-10">
//                     <Specialities />
//                 </div>

//                 <div className="py-10">
//                     <div className="flex flex-col items-start">
//                         <h1 className="text-gray-600 font-semibold text-4xl">Book an appointment for an in-clinic consultation</h1>
//                         <h1 className="text-gray-600 text-xl">Find experienced doctors across all specialties</h1>
//                     </div>

//                     <Appointments />

//                     <hr className="py-3"></hr>
//                 </div>


//                 <div>
//                     <label className='text-gray-600 text-5xl font-semibold'>What our users have to say</label>
//                     <Feedbacks />
//                 </div>

//             </div>
//         </div>
//     )
// };

// export default Home;


import { Link } from "react-router-dom";
import Facilities from "../components/Facilities";
import SearchLocation from "../components/SearchLocation";
import Specialities from "../components/Specialities";
import Appointments from "../components/Appointments";
import Feedbacks from "../components/Feedbacks";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <SearchLocation />
      <div className="py-5 sm:py-10">
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png"
          alt="Image"
          className="w-full"
        />
      </div>

      <Facilities />

      <div className="flex flex-col w-full px-4 sm:px-0">
  <div className="py-5 flex flex-col sm:flex-row justify-between sm:py-10">
    <div className="flex flex-col items-start">
      <p className="text-2xl sm:text-3xl text-gray-600 font-bold">
        Consult top doctors online for any health concern
      </p>
      <p className="text-lg sm:text-xl text-gray-600 font-semibold">
        Private online consultations with verified doctors in all specialties
      </p>
    </div>

    <div className="flex justify-between items-center">
      <Link to={"/"} className="text-lg hover:text-blue-600 py-2 px-2">
        View All Specialities
      </Link>
    </div>
  </div>

  <div className="py-5 sm:py-10">
    <Specialities />
  </div>

  <div className="py-5 sm:py-10">
    <div className="flex flex-col items-start">
      <h1 className="text-3xl sm:text-4xl text-gray-600 font-semibold">
        Book an appointment for an in-clinic consultation
      </h1>
      <h1 className="text-lg sm:text-xl text-gray-600">
        Find experienced doctors across all specialties
      </h1>
    </div>

    <Appointments />

    <hr className="py-3" />
  </div>

  <div className="py-5 sm:py-10">
    <label className="text-3xl sm:text-4xl text-gray-600 font-semibold">
      What our users have to say
    </label>
    <Feedbacks />
  </div>
</div>

    </div>
  );
};

export default Home;
