// import  { useState } from 'react'
// import Login from './Login';
// import Register from './Register';
// import image from "../../public/images/5789876.jpg";

// const LoginSignUpPage = () => {
//     const [login,setLogin] = useState(true);
//   return (
//     <div className='flex flex-col gap-4'>

//         <div className='pt-4'>
//             <button className={` text-xl underline px-6 hover:text-blue-500 ${login ? "text-blue-500" : "text-gray-700"}`} onClick={()=> {
//                 if(!login){
//                     setLogin(!login);
//                 }
//             }}>Login</button>
//             <button className={` text-xl underline px-6 hover:text-blue-500 ${!login ? "text-blue-500" :"text-gray-700"}`} onClick={()=> {
//                 if(login){
//                     setLogin(!login)
//                 }
//             }}>Register</button>
//         </div>

//         <hr></hr>

//         <div className='grid md:grid-cols-[2fr_2fr] gap-8  w-full h-full'>
//             <div>
//                 <img src={image} style={{height:"36rem"}}></img>
//             </div>
//             <div>
//                 {login ? (
//                     <Login />
//                 ):(
//                     <Register />
//                 )}
//             </div>

//         </div>
        
//     </div>
//   )
// }

// export default LoginSignUpPage;

import  { useState } from 'react'
import Login from './Login';
import Register from './Register';
import image from "../../public/images/5789876.jpg";

const LoginSignUpPage = () => {
    const [login,setLogin] = useState(true);
  
    return (
        <div className='flex flex-col gap-4'>

            <div className='pt-4'>
                <button 
                    className={`text-xl underline px-6 hover:text-blue-500 ${login ? "text-blue-500" : "text-gray-700"}`} 
                    onClick={() => { if(!login) setLogin(!login); }}
                >
                    Login
                </button>
                <button 
                    className={`text-xl underline px-6 hover:text-blue-500 ${!login ? "text-blue-500" : "text-gray-700"}`} 
                    onClick={() => { if(login) setLogin(!login); }}
                >
                    Register
                </button>
            </div>

            <hr />

            <div className='grid md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr 2fr] gap-8 w-full'>
                <div className='md:hidden'>
                    <img src={image} style={{height:"36rem"}} alt='background image' />
                </div>
                <div className='flex flex-col justify-center'>
                    {login ? <Login /> : <Register />}
                </div>
                <div className='hidden md:block'>
                    <img src={image} style={{height:"36rem"}} alt='background image' />
                </div>
            </div>
            
        </div>
    );
}

export default LoginSignUpPage;
