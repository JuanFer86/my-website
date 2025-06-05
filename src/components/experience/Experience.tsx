import "./index.css";

type PropsExperience = {
  items: {
    backgroundColor: string;
    date: string;
    description: string;
    title: string;
  }[];
};

const Experience = ({ items }: PropsExperience) => {
  return (
    <div className="container-experience">
      {items.map((item, i) => (
        <section
          key={item.title + i}
          style={{ background: item.backgroundColor }}
        >
          <div className="container-experience-opacity"></div>
          <div className="container-experience-content">
            <h2>{item.title}</h2>
            <span>{item.date}</span>
          </div>
          <p>{item.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Experience;
