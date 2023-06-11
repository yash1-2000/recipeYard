import { FunctionComponent } from "react";
import salad from "../../../public/images/salad.png";
import ramen from "../../../public/images/ramenillustration.png";

const Banner: FunctionComponent = () => {
  return (
    <div className="relative h-screen overflow-hidden px-6 pt-14 lg:px-8 " style={{zIndex:'-99'}}>
      <div className="w-full md:w-full lg:w-3/4 mx-auto py-32 sm:py-48 lg:py-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="lg:w-1/2 mx-auto text-center">
          <h1
            style={{ lineHeight: 1.2 }}
            className="text-6xl font-style_heading  md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#020024] via-[#6b1837] to-[#000000]"
          >
            Whisk blend savor repeat.
          </h1>
        </div>
      </div>

      <img
        className="absolute lg:w-[40%] bottom-[50px] -left-20"
        src={ramen}
        alt=""
      />
      <img
        className="absolute w-[100%] lg:w-[40%] md:w-[70%] -top-[80px] -right-[80px] md:-top-[100px] md:-right-[100px]  lg:-top-[200px] lg:-right-[200px] transform -scale-x-100 -scale-y-100"
        src={salad}
        alt=""
      />
    </div>
  );
};

export default Banner;
