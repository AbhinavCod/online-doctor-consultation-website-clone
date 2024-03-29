// import OfflineBookingForm from "../components/OfflineBookingForm";
// import image from "/images/Patient_clinic_1.png";

// const FindDoctor = () => {
//   return (
//   <>
//     <div className="bg-blue-800 w-full my-4" >

//       <img src={image} className="h-full relative" style={{height:"40rem",width:"100%"}}  alt="" />

//       <div className="flex flex-col gap-4 absolute" style={{top:"10rem",left:"8rem"}}>
//           <div className="text-5xl font-bold tracking-tight text-gray-200 " >Book Your Health Journey Now</div>
//           <div className="text-3xl font-bold tracking-tight text-gray-200 " >Book any doctor offline at just ₹ 149/-</div>
//           <OfflineBookingForm />
//       </div>
        
//     </div>

//     <div className="flex flex-col mt-24 ">

//       <div className="grid grid-cols-[2fr_2fr] mx-auto gap-64">

//         <div className="flex flex-col gap-4 items-start py-1">
//           <h1 className="text-5xl  text-gray-700">Safety of your data is our</h1>
//           <h1 className="text-5xl font-bold text-gray-700">top priority.</h1>

//           <div className="flex flex-col items-start my-4 gap-2">
//             <h1 className="text-2xl text-gray-600">✔️ Multi-level security checks</h1>
//             <h1 className="text-2xl text-gray-600">✔️ Multiple data backups</h1>
//             <h1 className="text-2xl text-gray-600">✔️ Stringent data privacy policies</h1>
//           </div>
//         </div>

//         <div>
//           <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"></img>
//         </div>

//       </div>

//       <div className="flex items-center justify-between my-6">
//         <div className="flex flex-col gap-2 px-36">
//           <img style={{width:"5rem",height:"5rem"}} src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png" alt="" />
//           <div className="flex flex-col items-center">

//           <h1 className="text-xl text-gray-600">256-bit</h1>
//           <h1 className="text-xl text-gray-600">encryption</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 px-36">
//           <img style={{width:"5rem",height:"5rem"}}  src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png" alt="" />
//           <div className="flex flex-col items-center">

//           <h1 className="text-xl text-gray-600">ISO 27001</h1>
//           <h1 className="text-xl text-gray-600">certified</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 px-36">
//           <img className="ml-6" style={{width:"5rem",height:"5rem"}}  src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png" alt="" />
//           <div className="flex flex-col items-center">

//           </div>
//           <div className="flex flex-col items-center">

//           <h1 className="text-xl text-gray-600">HIPAA</h1>
//           <h1 className="text-xl text-gray-600">compliant data centers</h1>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 px-36">
//           <img style={{width:"5rem",height:"5rem"}}  src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png" alt="" />
//           <div className="flex flex-col items-center">

//           <h1 className="text-xl text-gray-600">DSCI</h1>
//           <h1 className="text-xl text-gray-600">member</h1>
//           </div>
//         </div>

//       </div>

//     </div>
//     </>
//   )
// }

// export default FindDoctor;


import OfflineBookingForm from "../components/OfflineBookingForm";
import image from "/images/10130.jpg";

const FindDoctor = () => {
  return (
    <>
  <div className="flex flex-col gap-3 mt-4">
          <div className="text-5xl font-bold tracking-tight">Book Your Health Journey Now</div>
          <div className="text-3xl font-bold tracking-tight">Book any doctor offline at just ₹ 149/-</div>
  </div>
      <div className="grid md:grid-cols-[2fr_2fr] p-8">
          <div>
            <OfflineBookingForm />
          </div>
          <div className="flex ">
            <img className="bg-blue-800" src={image} alt="" />
          </div>
      </div>

      <div className="flex flex-col mt-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-5xl font-semibold text-gray-700">Safety of your data is our</h1>
            <h1 className="text-5xl font-semibold text-gray-700">top priority.</h1>

            <div className="flex flex-col items-start my-4 gap-2">
              <h1 className="text-xl text-gray-600">✔️ Multi-level security checks</h1>
              <h1 className="text-xl text-gray-600">✔️ Multiple data backups</h1>
              <h1 className="text-xl text-gray-600">✔️ Stringent data privacy policies</h1>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between mx-auto max-w-7xl px-4 mt-12">
          <div className="flex flex-col items-center gap-2">
            <img style={{ width: "5rem", height: "5rem" }} src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png" alt="" />
            <div>
              <h1 className="text-xl text-gray-600">256-bit</h1>
              <h1 className="text-xl text-gray-600">encryption</h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img style={{ width: "5rem", height: "5rem" }} src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png" alt="" />
            <div>
              <h1 className="text-xl text-gray-600">ISO 27001</h1>
              <h1 className="text-xl text-gray-600">certified</h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img style={{ width: "5rem", height: "5rem" }} src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png" alt="" />
            <div>
              <h1 className="text-xl text-gray-600">HIPAA</h1>
              <h1 className="text-xl text-gray-600">compliant data centers</h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img style={{ width: "5rem", height: "5rem" }} src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png" alt="" />
            <div>
              <h1 className="text-xl text-gray-600">DSCI</h1>
              <h1 className="text-xl text-gray-600">member</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default FindDoctor;
