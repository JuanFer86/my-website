import type { CSSProperties } from "react";
import { projects } from "../../constants/projects";
import useMediaQuery from "../../hooks/use-media-query";
import Card from "../common/card/Card";
import Carousel from "../common/carousel/Carousel";

function Projects() {
  const isMobile = useMediaQuery("(max-width: 430px)");

  const hasOverflowTool: CSSProperties = isMobile
    ? { overflow: "auto" }
    : { flexWrap: "wrap" };

  return (
    <Carousel>
      {projects.map((project, i) => (
        <Card
          key={`${project.title}-${i}`}
          {...project}
          style={{ justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              width: "100%",
              ...hasOverflowTool,
            }}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            onTouchEndCapture={(e) => e.stopPropagation()}
          >
            {project.tools.map((tool, i) => (
              <p
                key={`${tool}-${i}`}
                style={{
                  background: "#c7d5eb",
                  borderRadius: "1rem",
                  color: "#142f55",
                  fontSize: "13px",
                  fontWeight: "bold",
                  margin: 0,
                  padding: "0.5rem",
                  whiteSpace: "nowrap",
                }}
              >
                {tool}
              </p>
            ))}
          </div>
        </Card>
      ))}
    </Carousel>
  );
}

export default Projects;
