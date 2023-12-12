import { AnimatePresence, motion } from "framer-motion";

import { Close } from "../icons";
import DevInfo from "./DevInfo";
import { modal_animation, transition } from "../animations/controller_wrapper";
import SocialsList from "./SocialsList";

type Props = {
  toggleModal: () => void;
  modalVisible: boolean;
};

const Modal = ({ toggleModal, modalVisible }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {modalVisible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modal_animation}
          transition={transition}
          className="fixed pt-8 inset-0 md:top-1/4 md:-translate-y-1/2 md:mx-auto md:max-w-lg md:min-h-fit overflow-hidden bg-black md:rounded-xl bg-opacity-30 backdrop-blur-md backdrop-filter flex flex-col">
          <button
            onClick={() => toggleModal()}
            className="absolute right-3 top-3 group">
            <Close twClass="h-8 w-8 fill-white group-hover:fill-sky-500" />
          </button>

          <DevInfo
            padded="py-8"
            modalVisible={modalVisible}
            sliderVisible={true}
          />

          <div className="flex justify-between px-4">
            <div className="flex flex-col items-center text-white text-xl">
              <p className="text-xs">Schedule an appointment:</p>
              <button
                onClick={() =>
                  window.open("https://calendly.com/t-andrewlopez", "_blank")
                }
                className="w-full text-left hover:text-sky-500">
                Calendly
              </button>
            </div>
            <div className="flex flex-col items-center text-white text-xl">
              <p className="text-xs w-full text-left">Socials:</p>
              <SocialsList />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
