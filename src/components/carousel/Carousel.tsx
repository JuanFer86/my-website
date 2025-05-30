import "./index.css";

type PropsCarousel = {
  items: {
    backgroundColor: string;
    date: string;
    description: string;
    title: string;
  }[];
};

const Carousel = ({ items }: PropsCarousel) => {
  return (
    <div className="container-carousel">
      {items.map((item) => (
        <section style={{ background: item.backgroundColor }}>
          <div className="container-carousel-opacity"></div>
          <div className="container-carousel-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <span>{item.date}</span>
        </section>
      ))}
    </div>
  );
};

export default Carousel;
