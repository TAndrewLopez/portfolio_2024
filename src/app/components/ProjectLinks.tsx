import Github from "../icons/socials/Github";
import Globe from "../icons/SiteLink";

type Props = {
  githubURL?: string;
  liveURL?: string;
};

const ProjectLinks = ({ githubURL, liveURL }: Props) => {
  return (
    <div className="space-x-5 flex items-center">
      {githubURL && (
        <button onClick={() => window.open(githubURL, "_blank")}>
          <Github twClass="w-6 h-6 fill-white duration-300 hover:fill-sky-500" />
        </button>
      )}
      {liveURL && (
        <button onClick={() => window.open(liveURL, "_blank")}>
          <Globe twClass="w-6 h-6 fill-white duration-300 hover:fill-sky-500" />
        </button>
      )}
    </div>
  );
};

export default ProjectLinks;
