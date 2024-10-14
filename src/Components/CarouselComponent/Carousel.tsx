import {useState} from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface CarouselProps {
    images: string[],
    carouselId: string
}
export default function Carousel({images, carouselId}: CarouselProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

     const handleImgClick = (index: number) => {
        setSelectedImageIndex(index);  
    };

   const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    return (
      <>
        <div
          id={carouselId}
          className="carousel slide carouselContainer mx-auto"
        >
          <div className="carousel-indicators">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner w-100 h-100 d-flex align-items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block w-100 h-auto carouselImg"
                  alt="Alarmni sistemi slika"
                  onClick={() => handleImgClick(index)}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            {/* <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span> */}
            <GrPrevious className="carouselIcon rounded-circle p-1" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next carouselControlBtn"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            {/* <span
              className="carouselNextImg carousel-control-next-icon"
              aria-hidden="true"
            ></span> */}
            <GrNext className="carouselIcon rounded-circle p-1" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {selectedImageIndex !== null && (
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-fullscreen" role="document">
              <div className="modal-content modalCourousel">
                <div className="modal-header modalHeader pt-2 border-0 d-flex justify-content-end">
                  <button
                    type="button"
                    className="modalCloseBtn"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body d-flex justify-content-center align-items-center pt-0">
                  <div
                    id="modalCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner w-100 h-100">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === selectedImageIndex ? "active" : ""
                          }`}
                        >
                          <img
                            src={image}
                            className="d-block modalImg m-auto p-3"
                            alt={`Slide ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev text-danger"
                      type="button"
                      data-bs-target="#modalCarousel"
                      data-bs-slide="prev"
                    >
                      {/* <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span> */}
                      <GrPrevious className="carouselIcon rounded-circle p-1" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#modalCarousel"
                      data-bs-slide="next"
                    >
                      {/* <span
                        className="carouselNextImg carousel-control-next-icon"
                        aria-hidden="true"
                      ></span> */}
                      <GrNext className="carouselIcon rounded-circle p-1" />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );

}