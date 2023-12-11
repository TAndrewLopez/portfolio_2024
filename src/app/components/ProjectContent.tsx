import { Project } from "../data/projects";
import Carousel from "./Carousel";

type Props = {
  project: Project;
};

const ProjectContent = ({ project }: Props) => {
  const { videoURL, description, images } = project;
  return (
    <div className="relative text-white flex flex-col gap-5 px-5">
      {videoURL && (
        <video controls>
          <source src="./video/linkuistixVideo.mp4" type="video/mp4" />
        </video>
      )}
      {!videoURL && images?.length && <Carousel images={images} width={1200} />}
      {description}
    </div>
  );
};

export default ProjectContent;
