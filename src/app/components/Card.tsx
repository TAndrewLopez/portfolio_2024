import { Close } from "../icons";

type Props = {
  title: string;
  closeAction: () => void;
  content: React.ReactNode;
  footerLeft: React.ReactNode;
  footerRight: React.ReactNode;
  footerLeftTitle: string;
  footerRightTitle: string;
};

const Card = ({
  title,
  closeAction,
  content,
  footerLeft,
  footerRight,
  footerLeftTitle,
  footerRightTitle,
}: Props) => {
  return (
    <div className="rounded-t-xl h-full p-4 flex flex-col">
      {/* TITLE */}
      <div className="flex justify-end">
        <button onClick={() => closeAction()}>
          <Close twClass="h-8 w-8 fill-white hover:fill-sky-500" />
        </button>
      </div>
      {/* CONTENT */}
      <div className="flex-1 flex flex-col gap-12 items-center justify-center">
        <h1 className="relative text-center text-4xl font-bold text-white">
          {title}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3/4 h-0.5 bg-white"></span>
        </h1>
        {content}
      </div>
      {/* FOOTER */}
      <footer className="flex justify-between">
        {<CardFooterDiv title={footerLeftTitle}>{footerLeft}</CardFooterDiv>}
        {<CardFooterDiv title={footerRightTitle}>{footerRight}</CardFooterDiv>}
      </footer>
    </div>
  );
};

export default Card;

const CardFooterDiv = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-white text-xl">
    <p className="text-xs w-full text-left mb-3">{title}:</p>
    {children}
  </div>
);
