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
    <div
      className="relative px-6 py-3 font-bold text-black group w-fit cursor-pointer mt-4 md:mt-0"
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
      <span className="relative">{children}</span>
    </div>
  );
};

export default ButtonComponent;
