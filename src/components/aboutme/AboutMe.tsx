import "./index.css";

const AboutMe = () => {
  return (
    <div className="container-about-me">
      <section className="container-about-me-content">
        <h1>Hi, I'm Juan Fernando Narvaez</h1>
        <h3>Fullstack Developer</h3>
        {/* <h5>About Me</h5> */}
        <article
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>
            Fullstack developer with 5+ years of experience in frontend
            development, specializing in React, Node.js, and user experience
            design. Proven track record of delivering scalable and user-friendly
            web applications for industries such as education, logistics, and
            sports gambling. Experienced in Agile methodologies, RESTful APIs,
            and state management (Redux, Context API). Passionate about creating
            seamless user experiences and optimizing frontend performance.
          </p>
          <h4>Contact</h4>
          <p className="container-about-me-content-contact">
            <span>
              {" "}
              <img
                src="src/assets/gmail.webp"
                alt="Gmail icon"
                width={18}
                // loading="lazy"
              />{" "}
              <a href="mailto:narvaezju1@gmail.com">narvaezju1@gmail.com</a>
            </span>
            {/* <br /> */}
            <span>
              <img
                src="src/assets/linkedin.webp"
                alt="Gmail icon"
                width={25}
                // loading="lazy"
              />
              <a
                href="https://www.linkedin.com/in/juan-fer-narvaez/"
                target="_blank"
              >
                https://www.linkedin.com/in/juan-fer-narvaez/
              </a>
            </span>
          </p>
        </article>
      </section>
      {/* <section className="container-about-me-description"> */}
      {/* </section> */}
    </div>
  );
};

export default AboutMe;
