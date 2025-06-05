import AboutMe from "../components/aboutme/AboutMe";
import Education from "../components/education/education";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
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
        <Experience items={experienceJobs} />
      </>
    ),
  },
  {
    title: "Skills",
    component: (
      <>
        <Skills />
      </>
    ),
  },
  {
    title: "Education",
    component: (
      <>
        <Education />
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
