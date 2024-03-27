// import { Link } from "react-router-dom";

// type Props = {
//     url:string;
//     problem:string;
//     price:string;
// }

// const CarouselItemCard = ({url,problem,price}:Props) => {
//   return (
//     <div className="max-w-sm h-76 w-68 shadow-xl mx-12 overflow-hidden border-2 my-12 rounded-2xl">
//         <Link to={"/"}><img src={url} alt="Image"></img></Link>
        
//         <div className="py-2 flex flex-col">
//             <Link to={"/"}><div className="text-gray-700 text-xl mr-auto font-semibold tracking-tight">{problem}</div></Link>
//             <Link to={"/"}><p className="text-gray-700 text-xl items-start">{price}</p></Link>
//         </div>

//     </div>
//   )
// }

// export default CarouselItemCard;

import { Link } from "react-router-dom";

type Props = {
    url: string;
    problem: string;
    price: string;
}

const CarouselItemCard = ({ url, problem, price }: Props) => {
    return (
        <div className="max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md h-76 md:h-64 lg:h-76 xl:h-80 w-68 md:w-56 lg:w-68 xl:w-80 shadow-xl mx-4 md:mx-2 lg:mx-4 xl:mx-8 overflow-hidden border-2 my-12 md:my-6 lg:my-12 xl:my-16 rounded-2xl flex flex-col">
            <Link to={"/"} className="flex-shrink-0">
                <img className="w-full h-full object-cover rounded-t-xl" src={url} alt="Image" />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <Link to={"/"}>
                    <div className="text-gray-700 text-lg md:text-xl lg:text-lg xl:text-xl font-semibold tracking-tight mb-2">{problem}</div>
                </Link>
                <Link to={"/"}>
                    <p className="text-gray-700 text-lg md:text-xl lg:text-lg xl:text-xl">{price}</p>
                </Link>
            </div>
        </div>
    )
}

export default CarouselItemCard;

