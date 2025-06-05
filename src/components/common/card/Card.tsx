import { type CSSProperties, type ReactNode } from "react";
import "./index.css";

type PropsCard = {
  image?: string;
  style?: CSSProperties;
  size?: "m" | "b";
  title: string;
  children?: ReactNode;
};

const Card = ({ image, title, style, size = "m", children }: PropsCard) => {
  return (
    <article
      className={`container-card ${
        size === "m" ? "container-card-medium" : "container-card-biggest"
      }`}
      style={style}
    >
      {image && <img src={image} alt="git icon" width={150} loading="lazy" />}
      <h2>{title}</h2>
      {children}
    </article>
  );
};

export default Card;
