import { FunctionComponent, useState, memo } from "react";
import SigninComponent from "../../components/authentication-components/signin-component";
import SignupComponent from "../../components/authentication-components/signup-component";

const AuthView: FunctionComponent<{ closeView: () => void }> = ({
  closeView,
}) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 overflow-y-auto grid h-screen place-items-center backdrop-blur-sm bg-gray/30" style={{zIndex:'999999999999999'}}>
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
