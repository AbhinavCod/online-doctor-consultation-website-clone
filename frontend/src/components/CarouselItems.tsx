import { useState } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import CarouselItemCard from './CarouselItemCard';

const CarouselItems = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
            <CarouselItem className='flex'>
                <div className='flex  items-center'>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>

                </div>
            </CarouselItem>
            <CarouselItem>
            <div className='flex  items-center'>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>

                </div>
            </CarouselItem>
        </Carousel>
    </div>
  )
}

export default CarouselItems;