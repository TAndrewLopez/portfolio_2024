import { AnimatePresence, motion } from "framer-motion";
import { animations, transition } from "../animations/controller_wrapper";
import { PROJECT_DATA, Project } from "../data/projects";
import { useMemo } from "react";
import ProjectSlider from "../components/ProjectSlider";
import AboutSlider from "../components/AboutSlider";

type Props = {
  sliderVisible: boolean;
  projectSelected?: string;
  toggleSlider: () => void;
};

const SliderController = ({
  sliderVisible,
  projectSelected,
  toggleSlider,
}: Props) => {
  const projectData: Project | null = useMemo(() => {
    if (projectSelected) return PROJECT_DATA[projectSelected];
    return null;
  }, [projectSelected]);

  return (
    <AnimatePresence>
      {sliderVisible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animations["bottom"]}
          transition={transition}
          className="fixed top-0 bottom-0 left-0 right-0">
          <div className="fixed mx-4 rounded-t-xl md:max-w-4xl md:mx-auto bg-zinc-900 top-0 bottom-0 left-0 right-0">
            {projectData ? (
              <ProjectSlider
                project={projectData}
                toggleSlider={toggleSlider}
              />
            ) : (
              <AboutSlider toggleSlider={toggleSlider} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SliderController;
