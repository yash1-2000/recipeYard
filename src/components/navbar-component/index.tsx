import { memo, useState } from "react";
import ButtonComponent from "../button-component/button-component";
import AuthView from "../../views/authview";
import { useAuth } from "../../services/auth/auth-context";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthView, setShowAuthView] = useState(false);
  const { logoutFunction, currentUser } = useAuth();
  return (
    <>
      <nav className="relative bg-white shadow z-0">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  x-cloak
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
                      stroke-width="2"
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
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              x-cloak
              className={`${isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
                } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full"
                >
                  Join Slack
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full"
                >
                  Browse Topics
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full"
                >
                  Random Item
                </a>
                <a
                  href="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform lg:mt-0 hover:bg-gray-100  rounded-full"
                >
                  Experts
                </a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                {
                  currentUser === null ? <ButtonComponent onClick={() => setShowAuthView(true)}>
                    Login
                  </ButtonComponent> : <>
                    <ButtonComponent onClick={() => logoutFunction()}>Log out</ButtonComponent>

                    <button
                      type="button"
                      className="flex items-center focus:outline-none"
                      aria-label="toggle profile dropdown"
                    >
                      <Link to='/profile'> <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                          className="object-cover w-full h-full"
                          alt="avatar"
                        />
                      </div></Link>


                      <h3 className="mx-2 text-gray-700  lg:hidden">
                        {currentUser.name}
                      </h3>
                    </button>
                  </>
                }

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
