import { useEffect, useRef } from "react";
import "./index.css";
import { isOverlapping } from "../../utils/overlapping-elements";

const AboutMe = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isOverlap = useRef(false);

  useEffect(() => {
    const elA = document.querySelector(".container-navbar");
    if (ref.current && elA) {
      isOverlap.current = isOverlapping(
        ref.current as HTMLElement,
        elA as HTMLElement
      );
    }
  }, []);

  return (
    <div className="container-about-me">
      <section className="container-about-me-title">
        <h1>Hi, I'm Juan Fernando Narvaez</h1>
        <h3>Fullstack Developer</h3>
      </section>
      <section className="container-about-me-description">
        <h5>About Me</h5>
        <p
          ref={ref}
          onTouchEndCapture={(e) => isOverlap && e.stopPropagation()}
          style={{
            height: isOverlap && "60%",
            overflow: isOverlap && "auto",
          }}
        >
          Fullstack developer with 5+ years of experience in frontend
          development, specializing in React, Node.js, and user experience
          design. Proven track record of delivering scalable and user-friendly
          web applications for industries such as education, logistics, and
          sports gambling. Experienced in Agile methodologies, RESTful APIs, and
          state management (Redux, Context API). Passionate about creating
          seamless user experiences and optimizing frontend performance.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
