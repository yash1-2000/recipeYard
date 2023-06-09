import { FunctionComponent } from "react";
import loaderPizza from "../../../public/images/pizzaloader.png";

export const LoaderComponent: FunctionComponent = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img className="animate-spin" src={loaderPizza} alt="" />
    </div>
  );
};
export default LoaderComponent;
