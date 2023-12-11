import { Project } from "../data/projects";
import { skills } from "../icons";

type Props = {
  whiteIcons?: boolean;
  project: Project;
};

const ProjectTechList = ({ whiteIcons, project }: Props) => {
  return (
    <ul className="flex gap-3">
      {[
        project.technologies.map((tech) => {
          const Icon = skills[tech].icon;
          return (
            <li key={tech}>
              <Icon
                twClass={`w-6 h-6 transition ${whiteIcons ? "fill-white" : ""}`}
              />
            </li>
          );
        }),
      ]}
    </ul>
  );
};

export default ProjectTechList;
