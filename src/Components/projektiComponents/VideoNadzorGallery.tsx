import Carousel from "../CarouselComponent/Carousel";
import img1 from "../../Assets/VideoNadzorImg/videoNadzor1.webp";
import img2 from "../../Assets/VideoNadzorImg/videoNadzor2.webp";
import img3 from "../../Assets/VideoNadzorImg/videoNadzor3.webp";
import img4 from "../../Assets/VideoNadzorImg/videoNadzor4.webp";
import img5 from "../../Assets/VideoNadzorImg/videoNadzor5.webp";
import img6 from "../../Assets/VideoNadzorImg/videoNadzor6.webp";
import img7 from "../../Assets/VideoNadzorImg/videoNadzor7.webp";
import img8 from "../../Assets/VideoNadzorImg/videoNadzor8.webp";
import img9 from "../../Assets/VideoNadzorImg/videoNadzor9.webp";
import img10 from "../../Assets/VideoNadzorImg/videoNadzor10.webp";

export default function VideoNadzorGallery() {
    const images = [
        img1, 
        img2, 
        img3, 
        img4, 
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ]
    return (
      <article className="videoNadzor w-100 pb-5">
        <div className="container-md">
          <h2 className="fs-1 pb-5 pt-4 text-center">Video Nadzor</h2>
          <Carousel
            images={images}
            carouselId="carouselVidoeNadzorIndicators"
          />
        </div>
      </article>
    );
}