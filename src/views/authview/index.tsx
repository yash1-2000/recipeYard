import { FunctionComponent, useState, useEffect } from "react";
import SigninComponent from "../../components/authentication-components/signin-component";
import SignupComponent from "../../components/authentication-components/signup-component";

const AuthView: FunctionComponent = () => {
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
          setAuthComp={() => {
            console.log("login");
            setIsLogin(false);
          }}
        />
      ) : (
        <SignupComponent
          setAuthComp={() => {
            console.log("signup");
            setIsLogin(true);
          }}
        />
      )}
    </div>
  );
};

export default AuthView;
