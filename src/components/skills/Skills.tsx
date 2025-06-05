import { skills } from "../../constants/skills";
import Card from "../common/card/Card";
import Carousel from "../common/carousel/Carousel";

const Skills = () => {
  return (
    <Carousel>
      {skills.map((item, i) => (
        <Card key={`${item.title}-${i}`} {...item} />
      ))}
    </Carousel>
  );
};

export default Skills;
