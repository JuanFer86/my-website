import type { ReactNode } from "react";
import "./index.css";

type PropsCarousel = {
  // items: { image: string; title: string }[];
  children: ReactNode;
};

const Carousel = ({ children }: PropsCarousel) => {
  return (
    <div className="container-carousel">
      <div className="container-carousel-track">{children}</div>
    </div>
  );
};

export default Carousel;
