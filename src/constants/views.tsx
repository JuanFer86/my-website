import EducationIcon from "../assets/icon-components/education.icon";
import PersonIcon from "../assets/icon-components/person.icon";
import SkillIcon from "../assets/icon-components/skill.icon";
import WorkHistoryIcon from "../assets/icon-components/work-history.icon";
import { lazyPreload } from "../utils/lazy-preload";
import githubLogo from "../assets/github.webp";

const AboutMe = lazyPreload(() => import("../components/aboutme/AboutMe"));
const Education = lazyPreload(
  () => import("../components/education/Education")
);
const Experience = lazyPreload(
  () => import("../components/experience/Experience")
);
const Projects = lazyPreload(() => import("../components/projects/Projects"));
const Skills = lazyPreload(() => import("../components/skills/Skills"));

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
    icon: <img src={githubLogo} alt="github icon, projects" width={20} />,
  },
];
