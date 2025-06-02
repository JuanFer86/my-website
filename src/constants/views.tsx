import AboutMe from "../components/aboutme/AboutMe";
import Carousel from "../components/experience/Experience";
import { experienceJobs } from "./experience";

export const views = [
  {
    component: (
      <>
        <AboutMe />
      </>
    ),
  },
  {
    title: "Experience",
    component: (
      <>
        <Carousel items={experienceJobs} />
      </>
    ),
  },
  {
    title: "Skills",
    component: (
      <>
        <p>Skills</p>
      </>
    ),
  },
  {
    title: "Education",
    component: (
      <>
        <p>Education</p>
      </>
    ),
  },
  {
    title: "Projects",
    component: (
      <>
        <p>Projects</p>
      </>
    ),
  },
];
