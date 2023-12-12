import ControllerWrapper from "./ControllerWrapper";
import { skills } from "../icons";
import { motion } from "framer-motion";

type Props = {
  isHidden: boolean;
};

const SkillsController = ({ isHidden }: Props) => {
  const keys = Object.keys(skills);
  return (
    <ControllerWrapper
      isHidden={isHidden}
      animateFrom="bottom"
      background
      title="Skills">
      <div className="overflow-x-scroll min-h-[150px] md:min-h-[210px] h-full">
        <ul className="flex h-full items-center mx-5">
          {keys.map((key) => {
            const skill = skills[key];
            const { icon: Icon, name } = skill;
            return (
              <li key={key} className="pr-10 pt-5" title={name}>
                <motion.button
                  disabled={true}
                  whileHover={{ y: 10 }}
                  className="group relative">
                  <Icon twClass="w-12 h-12 md:w-20 md:h-20 saturate-0 hover:saturate-100" />
                  <p className="px-2 py-1 absolute hidden group-hover:inline transition mt-2 left-1/2 -translate-x-1/2 text-center text-stone-700 rounded bg-white bg-opacity-70 backdrop-blur-lg backdrop-filter ">
                    {skills[key].name}
                  </p>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </ControllerWrapper>
  );
};

export default SkillsController;
