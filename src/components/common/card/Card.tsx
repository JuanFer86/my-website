import { type CSSProperties, type ReactNode } from "react";
import "./index.css";

type PropsCard = {
  description?: string;
  image?: string;
  link?: string;
  style?: CSSProperties;
  size?: "m" | "b";
  title: string;
  children?: ReactNode;
};

const Card = ({
  description,
  image,
  link,
  title,
  style,
  size = "m",
  children,
}: PropsCard) => {
  return (
    <article
      className={`container-card ${
        size === "m" ? "container-card-medium" : "container-card-biggest"
      }`}
      style={style}
    >
      {image && <img src={image} alt="git icon" width={150} loading="lazy" />}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
      {link && (
        <a href={link} target="_blank">
          Go
          <img src="src\assets\github.webp" alt="gitbuh icon" width={20} />
        </a>
      )}
    </article>
  );
};

export default Card;
