"use client";

import ControllerWrapper from "./ControllerWrapper";
import DevInfo from "../components/DevInfo";

type Props = {
  toggleModel: () => void;
  toggleSlider: () => void;
  isHidden: boolean;
  sliderVisible: boolean;
};

const IntroController = ({
  toggleModel,
  toggleSlider,
  isHidden,
  sliderVisible,
}: Props) => {
  return (
    <ControllerWrapper isHidden={isHidden} animateFrom="top">
      <DevInfo
        toggleModal={toggleModel}
        toggleSlider={toggleSlider}
        modalVisible={isHidden}
        sliderVisible={sliderVisible}
      />
    </ControllerWrapper>
  );
};

export default IntroController;
