// import { Link } from "react-router-dom";

// type Props = {
//     url : string;
//     type:string;
//     detail:string;
// }

// const AppointmentCard = ({url,type,detail}:Props) => {
//   return (

//     <div className="max-w-sm h-96 w-70 py-5 px-2 overflow-hidden ">
//         <Link to={"/"}><img src={url} alt="Image"></img></Link>
        
//         <div className="py-2 flex flex-col">
//             <Link to={"/"}><div className="text-gray-700 text-xl mr-auto font-semibold tracking-tight">{type}</div></Link>
//             <Link to={"/"}><p className="text-gray-700 text-xl items-start">{detail}</p></Link>
//         </div>

//     </div>
//   )
// }

// export default AppointmentCard
import { Link } from "react-router-dom";

type Props = {
    url: string;
    type: string;
    detail: string;
}

const AppointmentCard = ({ url, type, detail }: Props) => {
    return (
        <div className="max-w-sm h-auto sm:max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <Link to={"/"}>
                <img className="w-full h-48 object-cover" src={url} alt="Image" />
            </Link>

            <div className="p-4">
                <Link to={"/"}>
                    <div className="text-gray-700 text-xl font-semibold tracking-tight mb-2">{type}</div>
                </Link>
                <Link to={"/"}>
                    <p className="text-gray-700 text-base">{detail}</p>
                </Link>
            </div>
        </div>
    );
}

export default AppointmentCard;
