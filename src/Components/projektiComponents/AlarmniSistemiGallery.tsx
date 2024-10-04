import img1 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi1.webp';
import img2 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi2.webp';
import img3 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi3.webp';
import img4 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi4.webp';
import img5 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi5.webp';
import img6 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi6.webp';
import img7 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi7.webp';
import img8 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi8.webp';
import img9 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi9.webp';
import img10 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi10.webp';
import img11 from '../../Assets/AlarmniSistemiImg/AlarmniSistemi11.webp';
import Carousel from '../CarouselComponent/Carousel';


export default function AlarmniSistemiGallery() {    
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
    ]

   
    

    return (
        <article className="alarmniSistemi w-100 pb-5">
          <div className="container-md">
            <h2 className="fs-1 pb-5 pt-4 text-center">Alarmni Sistemi</h2>
            <Carousel
              images={images}
              carouselId="carouselAlarmniSistemiIndicators"
            />
          </div>
        </article>
    );
}