import { socials } from "../icons";

type Props = {};

const SocialsList = (props: Props) => {
  const keys = Object.keys(socials);
  return (
    <ul className="flex gap-4">
      {keys.map((key) => {
        const Icon = socials[key].icon;
        return (
          <li key={key}>
            <button
              onClick={() => window.open(socials[key].url, "_blank")}
              className="group relative">
              <Icon twClass="fill-white w-8 h-8 hover:fill-sky-500" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialsList;
