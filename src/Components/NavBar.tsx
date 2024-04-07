import Logo from "../assets/Logo.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

function NavBar() {
  return (
    <div>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a
              href="#"
              className=" items-center space-x-3 hidden lg:flex rtl:space-x-reverse"
            >
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EcoBazar
              </span>
            </a>
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                {/* {nav bar search bar } */}
                <div className="relative mt-3 mx-4 lg:mx-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
                {/* {nav bar search bar } */}
              </form>
            </div>
            {/* {card icon + like icon} */}
            <div className="hidden lg:flex gap-4">
              <div>
                <a href="/Liked">
                  <button>
                    <IoIosHeartEmpty className="w-8 h-8 lg:transition lg:duration-500 lg:hover:scale-110 lg:hover:text-rose-500" />
                  </button>
                </a>
              </div>
              <div className="border-r"></div>
              <div>
                <a href="/Cart">
                  <button>
                    <SlHandbag className="w-8 h-8 lg:transition lg:duration-500 lg:hover:scale-110  lg:hover:text-green-300" />
                    <span className=" absolute top-24 ms-1.5 bg-red-500 text-white px-1 text-2xs rounded-full text-xs">
                      3
                    </span>
                  </button>
                </a>
              </div>
              <div>
                <div>
                  <p className="text-slate-400 text-xs">Shopping cart:</p>
                </div>
                <div>
                  <p className="text-xs">$57.50</p>
                </div>
              </div>
            </div>
            {/* {card icon + like icon} */}
          </div>
        </nav>
      </div>
    </div>
  );
}
export { NavBar };
