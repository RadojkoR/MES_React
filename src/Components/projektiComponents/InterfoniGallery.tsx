import Carousel from "../CarouselComponent/Carousel";
import img1 from "../../Assets/InterfoniImg/interfon1.webp";
import img2 from "../../Assets/InterfoniImg/interfon2.webp";
import img3 from "../../Assets/InterfoniImg/interfon3.webp";
import img4 from "../../Assets/InterfoniImg/interfon4.webp";
import img5 from "../../Assets/InterfoniImg/interfon5.webp";
import img6 from "../../Assets/InterfoniImg/interfon6.webp";


export default function InterfoniGallery() {
    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6
    ];
    return (
      <article className="interfoni w-100 pb-5">
        <div className="container-md">
          <h2 className="fs-1 pb-5 pt-4 text-center">Interfoni</h2>
          <Carousel
            images={images}
            carouselId="carouselInterfoniIndicators"
          />
        </div>
      </article>
    );
}