import { CiDollar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import Logo from "../assets/Logo.svg";
import { AboveNavBarMobile } from "./AboveNavBar";
import ReactLoginModel from "./Modals";

function SideBarMobile() {
  // {Sidebar for devices smaller that XL screen}
  return (
    <div
      style={{
        backgroundColor: `#333333`,
      }}
      className="lg:hidden"
    >
      <div className="flex flex-row-reverse justify-between">
        <div className="mt-4 me-3">
          <AboveNavBarMobile />
        </div>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between">
            <div>
              <a href="#" className="flex items-center ps-2.5 mb-5">
                <img
                  src={Logo}
                  className="h-6 mt-1 me-3 sm:h-7"
                  alt="EcoBazar Logo"
                />
                <span className="self-center mt-1 text-xl font-semibold whitespace-nowrap dark:text-white">
                  EcoBazar
                </span>
              </a>
            </div>
            <div>
              <ReactLoginModel />
            </div>
          </div>
          <ul className="space-y-3 font-medium">
            <li>
              {" "}
              {/* {button for location selector} */}
              <div id="location-selector" className="flex h-10">
                <div>
                  <HiOutlineMapPin className="w-7 h-7 mt-1 text-gray-500" />
                </div>
                <form className="">
                  <label htmlFor="underline_select" className="sr-only"></label>
                  <select
                    id="underline_select"
                    style={{
                      background: `none`,
                    }}
                    className="block w-17 font-semibold text-sm text-gray-900 bg-transparent  border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Location</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
              {/* {button for location selector ends} */}
            </li>
            <li>
              {/*button for currency selector */}
              <div id="location-selector" className="flex h-10">
                <div>
                  <CiDollar className="w-7 h-7 mt-1 text-gray-500" />
                </div>
                <form className="">
                  <label htmlFor="underline_select" className="sr-only"></label>
                  <select
                    id="underline_select"
                    style={{
                      background: `none`,
                    }}
                    className="block w-17 font-semibold text-sm text-gray-900 bg-transparent  border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected value="Dollar">
                      USD
                    </option>
                    <option value="Euro">EURO</option>
                  </select>
                </form>
              </div>
              {/*button for currency selector */}
            </li>
            <li>placeholder</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export { SideBarMobile };
