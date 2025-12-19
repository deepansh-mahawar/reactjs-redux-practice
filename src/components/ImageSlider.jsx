import { useState } from "react";
import "../css/slider.css";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400",
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
      <button className="btn left" onClick={prevSlide}>
        Prev
      </button>
      <img src={images[currentIndex]} alt="Slider" className="slide-image" />
      <button className="btn right" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
