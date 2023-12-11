"use client";

import { useState } from "react";
import Modal from "./components/Modal";
import IntroController from "./controller/IntroController";
import ProjectController from "./controller/ProjectController";
import SkillsController from "./controller/SkillsController";
import SliderController from "./controller/SliderController";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showBottomSlider, setShowBottomSlider] = useState(false);
  const [project, setProject] = useState("");

  const toggleModal = () => {
    if (showBottomSlider) setShowBottomSlider(!showBottomSlider);
    setShowModal(!showModal);
  };

  const toggleSlider = (projectName = "") => {
    if (showModal) setShowModal(!showModal);
    projectName ? setProject(projectName) : setProject("");
    setShowBottomSlider(!showBottomSlider);
  };

  return (
    <main className="bg-mystic bg-no-repeat bg-center bg-cover bg-zinc-900 h-full overflow-hidden">
      <div className="flex flex-col h-full mx-auto max-w-4xl p-4 space-y-5">
        {/* DEV INFO */}
        <div className="flex-1">
          <IntroController
            toggleModel={toggleModal}
            isHidden={showModal}
            toggleSlider={toggleSlider}
            sliderVisible={showBottomSlider}
          />
        </div>

        {/* PROJECT SECTION */}
        <div className="flex-[3_1_0%] min-h-[225px]">
          <ProjectController toggleSlider={toggleSlider} isHidden={showModal} />
        </div>

        {/* SKILLS SECTION */}
        <div className="">
          <SkillsController isHidden={showModal} />
        </div>
      </div>

      {/* MODAL */}
      <Modal toggleModal={toggleModal} modalVisible={showModal} />

      {/* SLIDER */}
      <SliderController
        toggleSlider={toggleSlider}
        sliderVisible={showBottomSlider}
        projectSelected={project}
      />
    </main>
  );
}
