import { AnimatePresence, motion } from "framer-motion";
import { animations, transition } from "../animations/controller_wrapper";

type Props = {
  isHidden: boolean;
  animateFrom: "top" | "left" | "right" | "bottom";
  title?: string;
  padded?: boolean;
  background?: boolean;
  children: React.ReactNode;
};

const ControllerWrapper = ({
  isHidden,
  animateFrom,
  title,
  padded,
  background,
  children,
}: Props) => {
  const default_styles = "flex-1 h-full rounded-xl relative min-h-content";
  const inputStyles = `
  ${padded && "p-4"}
  ${background && " bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"}`;
  const animation = animations[animateFrom];

  return (
    <AnimatePresence mode="wait">
      {!isHidden && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation}
          transition={transition}
          className={default_styles + inputStyles}>
          <div className="flex items-center justify-center h-full">
            {title && (
              <h2 className="fixed left-9 top-7 text-white text-xl font-bold tracking-wider z-10">
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3/4 h-0.5 bg-white"></span>
                {title}
              </h2>
            )}
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ControllerWrapper;
