import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Carousel, CarouselItem } from "react-bootstrap";
import { useState } from "react";
import list from "../data/data";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation,Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import MedicineCard from "../components/MedicineCard";

SwiperCore.use([Navigation, Pagination]);


const MedicinesPage = () => {
  const [medName, setMedName] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <div className="flex flex-col gap-2 my-3 relative">
      <div className="flex px-8 md:flex-row md:justify-between sm:flex-col">

        <div className="flex border-1 flex-col border-gray-300 w-[50%] align-items-center roundeed-sm z-10 shadow-md relative">

          <div className="flex flex-row w-full">
            <span className="py-1 w-[5%] my-auto"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
            <span className="w-[80%] py-2"><input type="text" onChange={(e) => {
              if (e.target.value.length >= 3) {
                setMedName(e.target.value);
                setDisplay(true);
              }
              else {
                setDisplay(false);
              }
            }} placeholder="Search for medicines, health products and more" className="outline-none py-1 w-full" /></span>
          </div>

          {medName.length >= 3 && display && (
            <div className='overflow-y-auto w-full bg-white border-gray-200 h-56 px-4 absolute top-full left-0 right-0 z-20'>
              {list.map((item,index) => (
                <>
                  <div key={index} className="flex flex-row justify-between px-2 py-2 w-full z-10">
                    <span className=""><img className="h-16 w-16" src="https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png" alt="" /></span>

                    <div className="flex flex-col">
                      <span className="font-semibold">{item}</span>
                      <span className="text-gray-500 font-semibold">30 Tablets ( 30/strip )</span>
                      <span className="text-gray-500 font-semibold">₹ 15.64/tab</span>
                    </div>

                    <span className="border-1 border-blue-500 px-6 rounded-md my-4"><button onClick={() => setDisplay(false)} className="text-blue-500">ADD</button></span>
                  </div>
                  <hr></hr>
                </>
              ))}
            </div>
          )}
        </div>


        <div>
          <button className="bg-[#14BEF0] py-2 px-3 text-white text-2xl rounded-md font-semibold hover:z-10 hover:shadow-xl"><span><FontAwesomeIcon className="mx-2" icon={faShoppingCart}></FontAwesomeIcon></span>View Cart</button>
        </div>

      </div>

      <div className="flex my-4">
        <Carousel>
          <CarouselItem>
            <img className="bg-[#E4F2EB]" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png"></img>
          </CarouselItem>
          <CarouselItem>
            <img className="bg-[#EEEBf8]" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png"></img>
          </CarouselItem>
          <CarouselItem>
            <img className="bg-[#F7E8E6]" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png"></img>
          </CarouselItem>
          <CarouselItem>
            <img className="bg-[#E4F2EB]" src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png"></img>
          </CarouselItem>
        </Carousel>

      </div>


      <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation 
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
        <SwiperSlide>
          <MedicineCard />
        </SwiperSlide>
      
        
      </Swiper>
    </div>
    </div>
  )
}

export default MedicinesPage;
