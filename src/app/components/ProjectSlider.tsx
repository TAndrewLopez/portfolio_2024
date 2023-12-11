import { useMemo } from "react";
import { Project } from "../data/projects";
import Card from "./Card";
import ProjectLinks from "./ProjectLinks";
import ProjectTechList from "./ProjectTechList";
import ProjectContent from "./ProjectContent";

type Props = {
  project: Project;
  toggleSlider: () => void;
};
const ProjectSlider = ({ project, toggleSlider }: Props) => {
  const { name, githubURL, liveURL, description, videoURL } = project;

  const leftTitle: string[] = useMemo(() => {
    const titleArr: string[] = [];
    if (githubURL) titleArr.push("GitHub");
    if (liveURL) titleArr.push("Live Site");
    return titleArr;
  }, [githubURL, liveURL]);

  return (
    <Card
      title={name}
      closeAction={toggleSlider}
      content={<ProjectContent project={project} />}
      footerLeft={<ProjectLinks githubURL={githubURL} liveURL={liveURL} />}
      footerRight={<ProjectTechList project={project} />}
      footerLeftTitle={leftTitle.join(" | ")}
      footerRightTitle="Technologies"
    />
  );
};

export default ProjectSlider;
