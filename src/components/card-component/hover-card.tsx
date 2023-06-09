import { FunctionComponent, ReactElement, useState } from "react";
// import { FiExternalLink } from "react-icons/fi";

export const HoverCardComponent: FunctionComponent = (): ReactElement => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      {/* <div
        className="relative w-full aspect-square overflow-hidden bg-white rounded-lg shadow-lg bg-cover bg-center bg-[#4b5563] cursor-pointer"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=6)`,
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-full aspect-square overflow-hiddenrounded-lg bg-[#000000de] ${
            showInfo ? "translate-y-0" : "translate-y-full"
          } transition ease-in-out duration-300 delay-150`}
        >
          <div className="text-white">
            <h1>kmckdsmcksdmck</h1>
            <h1>kmckdsmcksdmck</h1>
            <h1>kmckdsmcksdmck</h1>
            <h1>kmckdsmcksdmck</h1>
          </div>
        </div>
      </div> */}

      <div
        className="relative w-full h-full overflow-hidden bg-white rounded-lg shadow-lg bg-cover bg-center bg-[#4b5563] cursor-pointer"
        style={{
          // backgroundImage: `url(${profileImg})`,
          backgroundImage: `url(https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=6)`,
        }}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-full aspect-square rounded-lg bg-[#000000bd] ${
            showInfo ? "translate-y-0" : "translate-y-full"
          } transition ease-in-out duration-300 delay-150`}
        >
          <div className="relative text-xl h-full w-full font-bold text-white">
            <h1 className="font-style_heading4 absolute -top-[80px] text-center w-full py-7 bg-gradient-to-t from-[#000000] ">
                Biryani
            </h1>
            <div className="h-full w-full font-thin text-sm flex items-center justify-center p-4">
              <p>
                ilwind lets you conditionally apply utility classes in different
                states using variant modifiers. For exam{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCardComponent;
