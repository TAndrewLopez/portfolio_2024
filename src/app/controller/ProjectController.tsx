import Image from "next/image";
import ProjectTechList from "../components/ProjectTechList";
import { PROJECT_DATA } from "../data/projects";
import ControllerWrapper from "./ControllerWrapper";

type Props = {
  toggleSlider: (name?: string) => void;
  isHidden: boolean;
};

const ProjectController = ({ toggleSlider, isHidden }: Props) => {
  const projects = Object.keys(PROJECT_DATA);

  return (
    <ControllerWrapper
      isHidden={isHidden}
      animateFrom="left"
      background
      title="Projects">
      <div className="h-full w-full relative">
        <ul className="absolute overflow-y-auto inset-0 flex flex-col">
          {projects.map((name) => {
            const project = PROJECT_DATA[name];
            const { imageURL } = project;
            return (
              <li
                onClick={() => toggleSlider(name)}
                className="relative cursor-pointer duration-300 m-5 rounded-xl saturate-50 hover:saturate-100 min-h-[210px] group"
                key={project.name}>
                <div className="flex h-full flex-col">
                  <div className="flex-1 flex text-white justify-end px-4 py-2 relative ">
                    <p className="hidden font-bold group-hover:block">
                      {project.name}
                    </p>
                    <Image
                      className="-z-10 rounded-xl"
                      src={imageURL}
                      alt="project_banner"
                      fill
                      priority
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="hidden fixed bottom-0 group-hover:flex w-full justify-between items-end px-2 pb-2">
                    <ProjectTechList whiteIcons project={project} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </ControllerWrapper>
  );
};

export default ProjectController;
