import useMediaQuery from "../../hooks/use-media-query";
import GmailLogo from "../../assets/gmail.webp";
import LinkedinLogo from "../../assets/linkedin.webp";
import "./index.css";

const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width: 375px)");

  return (
    <div className="container-about-me">
      <section className="container-about-me-content">
        <h1>Hi, I'm Juan Fernando Narvaez</h1>
        <h2>Fullstack Developer</h2>
        {/* <h5>About Me</h5> */}
        <article onTouchEndCapture={(e) => isMobile && e.stopPropagation()}>
          <p>
            Fullstack developer with 5+ years of experience in frontend
            development, specializing in React, Node.js, and user experience
            design. Proven track record of delivering scalable and user-friendly
            web applications for industries such as education, logistics, and
            sports gambling. Experienced in Agile methodologies, RESTful APIs,
            and state management (Redux, Context API). Passionate about creating
            seamless user experiences and optimizing frontend performance.
          </p>
          <header>Contact</header>
          <p className="container-about-me-content-contact">
            <span>
              {" "}
              <img src={GmailLogo} alt="Gmail icon" width={18} />{" "}
              <a href="mailto:narvaezju1@gmail.com">narvaezju1@gmail.com</a>
            </span>
            {/* <br /> */}
            <span>
              <img src={LinkedinLogo} alt="Linkedin icon" width={25} />
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
