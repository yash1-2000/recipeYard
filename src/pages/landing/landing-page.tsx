import { FunctionComponent } from "react";
import Banner from "../../views/landing/banner";
import HoverCardComponent from "../../components/card-component/hover-card";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const LandingPage: FunctionComponent = () => {
  return (
    <>
      <div
        className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <Banner />
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center font-style_heading2">
        Delicious recipes
      </h2>
      <div className="lg:w-5/6 md:w-5/6 mx-auto px-5 py-2 lg:px-32 lg:pt-8">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex lg:w-1/2 w-full aspect-video flex-wrap">
            <div className="md:w-1/2 w-full p-1 aspect-video md:p-2">
              <HoverCardComponent />
            </div>
            <div className="md:w-1/2 w-full p-1 aspect-video md:p-2">
              <HoverCardComponent />
            </div>
            <div className="w-full p-1 aspect-video md:p-2">
              <HoverCardComponent />
            </div>
          </div>
          <div className="flex lg:w-1/2 w-full flex-wrap">
            <div className="w-full aspect-video p-1 md:p-2">
              <HoverCardComponent />
            </div>
            <div className="md:w-1/2 w-full aspect-video p-1 md:p-2">
              <HoverCardComponent />
            </div>
            <div className="md:w-1/2 w-full aspect-video p-1 md:p-2">
              <HoverCardComponent />
            </div>
          </div>
        </div>
        <Link to="/recipes">
          <h6 className="flex gap-4 items-center justify-end py-4 text-lg font-bold cursor-pointer">
            Seemore <FiExternalLink />
          </h6>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
