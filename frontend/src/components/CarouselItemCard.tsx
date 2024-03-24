import { Link } from "react-router-dom";

type Props = {
    url:string;
    problem:string;
    price:string;
}

const CarouselItemCard = ({url,problem,price}:Props) => {
  return (
    <div className="max-w-sm h-76 w-68 shadow-xl mx-12 overflow-hidden border-2 my-12 rounded-2xl">
        <Link to={"/"}><img src={url} alt="Image"></img></Link>
        
        <div className="py-2 flex flex-col">
            <Link to={"/"}><div className="text-gray-700 text-xl mr-auto font-semibold tracking-tight">{problem}</div></Link>
            <Link to={"/"}><p className="text-gray-700 text-xl items-start">{price}</p></Link>
        </div>

    </div>
  )
}

export default CarouselItemCard;