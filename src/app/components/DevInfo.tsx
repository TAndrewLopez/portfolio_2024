import Image from "next/image";

type Props = {
  padded?: string;
  toggleModal?: () => void;
  modalVisible: boolean;
  toggleSlider?: () => void;
  sliderVisible: boolean;
};

const DevInfo = ({
  padded,
  toggleModal,
  modalVisible,
  toggleSlider,
  sliderVisible,
}: Props) => {
  return (
    <div
      className={`flex-1 flex justify-center flex-col items-center text-white ${padded}`}>
      {modalVisible && (
        <div className="relative mb-4">
          <h2 className="font-semibold text-3xl">Let&rsquo;s Connect!</h2>
          <span className="absolute left-0 right-0 h-0.5 shadow-white shadow-sm"></span>
        </div>
      )}

      <h1 className="text-xl font-bold tracking-wider group-hover:text-sky-300">
        Andrew Dobson
      </h1>
      <h3 className="group-hover:text-sky-300 font-thin">
        Fullstack Developer
      </h3>

      <div className="relative mt-2 flex flex-col items-center justify-center">
        <Image
          src={"/image/dev.jpeg"}
          alt="dev"
          width={modalVisible ? 86 : 100}
          height={modalVisible ? 86 : 100}
          className="rounded-full group-hover:border-sky-500 group-hover:border-2"
        />
        <p className="absolute bottom-0 right-3 w-4 h-4 rounded-full border-white border bg-green-500"></p>
      </div>

      {!modalVisible && (
        <div className="flex gap-5 mt-4 ">
          <button
            className={`px-4 py-1 rounded-xl duration-300 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter ${
              !sliderVisible ? "hover:bg-sky-500" : ""
            }`}
            disabled={sliderVisible}
            onClick={toggleSlider ? () => toggleSlider() : () => {}}>
            About
          </button>
          <button
            className={`px-4 py-1 rounded-xl duration-300 bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter ${
              !sliderVisible ? "hover:bg-sky-500" : ""
            }`}
            disabled={sliderVisible}
            onClick={toggleModal ? () => toggleModal() : () => {}}>
            Contact
          </button>
        </div>
      )}

      {modalVisible && (
        <p className="font-thin py-2">
          I help cultivate bonds between products and users.
        </p>
      )}
    </div>
  );
};

export default DevInfo;
