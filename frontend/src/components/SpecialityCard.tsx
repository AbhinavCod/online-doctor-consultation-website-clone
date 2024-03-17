import { Link } from "react-router-dom";

type Props = {
    url:string;
    symptom:string;
}

const SpecialityCard = ({url,symptom}:Props) => {
  return (
    <div className="max-w-sm h-96 w-64 py-5 overflow-hidden ">
        <Link to={"/"} >
            <img src={url} style={{width:"13rem",height:"13rem",marginLeft:"20px"}}alt="Image" />
        </Link>

        <div className="py-4 px-4 flex-1">
            <Link to={"/"}><div className="text-gary-600 font-semibold text-xl">{symptom}</div></Link>
            
            <Link className="text-xl text-blue-500" to={"/"}>CONSULT NOW</Link>
        </div>

    </div>
  )
}

export default SpecialityCard