import Card from "../card/Card";
import "./index.css";

type PropsCarousel = {
  items: { image: string; title: string }[];
};

const Carousel = ({ items }: PropsCarousel) => {
  return (
    <div className="container-carousel">
      <div className="container-carousel-track">
        {items.map((item, i) => (
          <Card key={`${item.title}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
