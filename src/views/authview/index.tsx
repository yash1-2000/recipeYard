import { FunctionComponent, useState, useEffect, memo } from "react";
import SigninComponent from "../../components/authentication-components/signin-component";
import SignupComponent from "../../components/authentication-components/signup-component";

const AuthView: FunctionComponent<{ closeView: () => void }> = ({
  closeView,
}) => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);
  return (
    <div
      x-transition:enter="transition duration-300 ease-out"
      x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
      x-transition:leave="transition duration-150 ease-in"
      x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
      x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      className="fixed inset-0 z-100 overflow-y-auto grid h-screen place-items-center backdrop-blur-sm bg-gray/30"
    >
      {isLogin ? (
        <SigninComponent
          closeView={closeView}
          setAuthComp={() => setIsLogin(false)}
        />
      ) : (
        <SignupComponent
          closeView={closeView}
          setAuthComp={() => setIsLogin(true)}
        />
      )}
    </div>
  );
};

export default memo(AuthView);
