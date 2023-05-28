import { FunctionComponent, ReactNode } from "react";

type buttonComponentProps = {
  onClick?: (e: any) => void;
  children: ReactNode;
};

const ButtonComponent: FunctionComponent<buttonComponentProps> = ({
  children,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className="px-5 py-2 font-semibold text-sm tracking-wide capitalize transition-colors duration-300 transform bg-[#FFFFFF] text-primary_text rounded-full focus:outline-none"
      >
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
