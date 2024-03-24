
import CarouselItemCard from './CarouselItemCard';

const CarouselItems = () => {

 
  return (
    <div className='h-ful'>
                <div className='flex  items-center'>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/depression-anxiety-v1.jpg'
                     problem='Depression and Anxiety?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://practo.com/consult/static/images/period-problems-v1.jpg'
                     problem='Periods problems?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://practo.com/consult/static/images/performance-issues-bed-v1.jpg'
                     problem='Performance issues in beds?' price='₹ 699/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/skin-problems-v1.jpg'
                     problem='Skin Problems?' price='₹ 599/-'/>
                
            </div>
            <div className='flex  items-center'>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/lose-weight-v1.jpg'
                     problem='Want to loose weight?' price='₹ 459/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/stomach-issues-v1.jpg'
                     problem='Stomach Issues?' price='₹ 499/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/vaginal-infections-v1.jpg'
                     problem='Vaginal Infections?' price='₹ 599/-'/>
                    <CarouselItemCard url='https://www.practo.com/consult/static/images/sick-kid-v1.jpg'
                     problem='Sick Kid?' price='₹ 599/-'/>

                </div>
    </div>
  )
}

export default CarouselItems;