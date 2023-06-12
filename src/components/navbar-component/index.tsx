import { memo, useState } from "react";
import AuthView from "../../views/authview";
import { useAuth } from "../../services/auth/auth-context";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthView, setShowAuthView] = useState(false);
  const { logoutFunction, currentUser } = useAuth();
  return (
    <>
      <nav className="relative bg-white shadow" style={{ zIndex: "99999" }}>
        <div className=" px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="/">
                <img className="w-auto h-8 lg:h-10" src={logo} alt="" />
              </a>
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8"></div>

              <div className="lg:flex wrap items-center lg:mt-0">
                {currentUser === null ? (
                  <>
                    <Link to="/public-recipes-view">
                      <p className="lg:px-4 py-2 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full">
                        Recipes
                      </p>
                    </Link>
                    <p
                      onClick={() => setShowAuthView(true)}
                      className="lg:px-4 py-2 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full cursor-pointer"
                    >
                      Login
                    </p>
                  </>
                ) : (
                  <>
                    <Link to="/home">
                      <p className="lg:px-4 py-2 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full">
                        Home
                      </p>
                    </Link>

                    <p
                      onClick={() => logoutFunction()}
                      className="py-2 lg:px-4 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full cursor-pointer"
                    >
                      Log out
                    </p>

                    <Link to="/profile">
                      <p className="lg:px-4 py-2 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full">
                        Profile
                      </p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showAuthView ? (
        <AuthView closeView={() => setShowAuthView(false)} />
      ) : null}
    </>
  );
}

export default memo(NavbarComponent);
