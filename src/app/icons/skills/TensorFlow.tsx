import Image from "next/image";

const TensorFlow = ({ twClass }: { twClass: string }) => {
  return (
    <div className={twClass}>
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        alt="tensor_flow"
        height={60}
        width={60}
        className={twClass}
      />
    </div>
  );
};

export default TensorFlow;
