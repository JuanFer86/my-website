import EducationIcon from "../assets/icon-components/education.icon";
import PersonIcon from "../assets/icon-components/person.icon";
import SkillIcon from "../assets/icon-components/skill.icon";
import WorkHistoryIcon from "../assets/icon-components/work-history.icon";
import AboutMe from "../components/aboutme/AboutMe";
import Education from "../components/education/education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { experienceJobs } from "./experience";

export const views = [
  {
    title: "Profile",
    component: (
      <>
        <AboutMe />
      </>
    ),
    icon: <PersonIcon color="#142f55" />,
  },
  {
    title: "Experience",
    component: (
      <>
        <Experience items={experienceJobs} />
      </>
    ),
    icon: <WorkHistoryIcon color="#142f55" />,
  },
  {
    title: "Skills",
    component: (
      <>
        <Skills />
      </>
    ),
    icon: <SkillIcon color="#142f55" />,
  },
  {
    title: "Education",
    component: (
      <>
        <Education />
      </>
    ),
    icon: <EducationIcon color="#142f55" />,
  },
  {
    title: "Projects",
    component: (
      <>
        <Projects />
      </>
    ),
    icon: (
      <img
        src="src/assets/github.webp"
        alt="github icon, projects"
        width={20}
      />
    ),
  },
];
