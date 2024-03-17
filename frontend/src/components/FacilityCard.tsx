import { Link } from "react-router-dom";

type Props = {
  url: string;
  facility: string;
  feature: string;
  bgColor:string
};

const FacilityCard = ({ url, facility, feature ,bgColor}: Props) => {
  return (
    <Link to={"/"}>
    <div className="max-w-sm h-96 w-64 overflow-hidden shadow-lg rounded-xl">
    <div className="flex flex-col h-full">
      <img src={url} alt="Consult Doctor" className={`w-full h-56 object-cover object-top bg-blue-400 ${bgColor}`} style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"2rem"}} />

      <div className="py-4 px-4 flex-1">
        <div className="font-bold mb-2" style={{ fontSize: "20px" }}>{facility}</div>
        <p className="text-gray-700 text-xl" style={{ fontWeight: "400" }}>{feature}</p>
      </div>
    </div>
  </div>
    </Link>
  );
};

export default FacilityCard;
