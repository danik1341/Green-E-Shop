import { HiOutlineMapPin } from "react-icons/hi2";
import { SideBarMobile } from "./MobileSideBar";
import { HiUser } from "react-icons/hi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

function AboveNavBarLargeScreen() {
  return (
    <div
      style={{
        backgroundColor: `#EDF2EE`,
      }}
      className="max-w-screen-xxl h-11 flex-wrap align-baseline justify-between mx-auto lg:mx-0 hidden lg:flex"
    >
      {/* {Country selector} */}
      <div id="location-selector" className="ms-14 flex">
        <div
          style={{
            color: `#7A997C`,
          }}
        >
          <HiOutlineMapPin className=" mt-3.5 me-1" />
        </div>
        <form className="max-w-sm mx-auto">
          {/* {Country selector} */}
          <label htmlFor="underline_select" className="sr-only"></label>
          <select
            style={{
              background: `none`,
              color: `#7A997C`,
            }}
            className="block py-2.5 px-0 mt-0.5 w-1/1 text-sm 
             bg-transparent  border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Store Location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
      {/* {Country selector} */}
      {/* {Language - selector} */}
      <div className="flex me-14" id="lang-currency-container">
        <div id="lang-selector">
          <form className="max-w-sm mx-auto">
            <label htmlFor="underline_select" className="sr-only"></label>
            <select
              id="underline_select"
              style={{
                background: `none`,
                color: `#7A997C`,
              }}
              className="block px-12 py-2.5 mt-0.5  w-1/1 text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected value="US">
                ENG
              </option>
              <option value="FR">FR</option>
              <option value="DE">GER</option>
            </select>
          </form>
        </div>
        {/* {Language - selector} */}
        <div
          style={{
            backgroundColor: `gray`,
            color: `#7A997C`,
          }}
          className="border-r h-5 mt-3 border-gray-500"
        ></div>
        {/* {Currency Selector} */}
        <div id="currency-selector">
          <form className="max-w-sm mx-auto">
            <label htmlFor="underline_select" className="sr-only"></label>
            <select
              id="underline_select"
              style={{
                background: `none`,
                color: `#7A997C`,
              }}
              className="block px-12 mt-0.5 py-2.5 w-1/1 text-sm text-gray-500 bg-transparent border-0   appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected value="US">
                USD
              </option>
              <option value="EURO">EURO</option>
            </select>
          </form>
        </div>
        <div className="border-r h-5 mt-3 border-gray-500"></div>
        {/* {Currency Selector} */}
        <div
          id="login-logout-container"
          className="flex mt-0.5 ms-10 text-sm text-gray-500"
        >
          <div
            style={{
              color: `#7A997C`,
            }}
          >
            <a href="/SignIn">
              <HiUser className="w-6 h-6 mt-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// {Section above the nav bar for smaller screens (mobile)}
function AboveNavBarMobile() {
  return (
    <div
      style={{
        backgroundColor: `#EDF2EE`,
      }}
      className="max-w-screen-xxl  h-13 flex-wrap align-baseline justify-between mx-auto lg:hidden"
    >
      <div>
        <div
          className="flex justify-between"
          style={{
            color: `#7A997C`,
          }}
        >
          <div className="mb-1 flex">
            <SideBarMobile />
            <div id="search">
              <button>
                <div
                  style={{
                    padding: "0",
                  }}
                  className="relative flex justify-start flex-col overflow-hidden "
                >
                  <div className="relative mt-6 max-w-lg">
                    <div className=" max-w-md">
                      <form action="" className="relative w-max">
                        <input
                          type="search"
                          className="peer relative z-10 h-6 w-6 cursor-pointer me-2 rounded-full bg-transparent outline-none focus:w-auto focus:cursor-text focus:mt-0.5 focus:ms-1 focus:pl-16 focus:pr-4 transition-all duration-700 border-none"
                        />
                        <IoIosSearch
                          className="peer absolute font-bold inset-y-0 my-auto ms-2 h-6 w-6
                       stroke-gray-500 transition-all duration-500 "
                          style={{
                            left: "0", // Initial position from the left
                            transition: "left 0.5s ease", // Apply transition to left property
                          }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* {search-cart-likes container} */}
          <div className="flex mt-6 gap-3 me-3">
            <a href="/Liked">
              <div id="likes">
                <IoIosHeartEmpty className="w-6 h-6  hover:text-rose-500 transition ease-in-out hover:scale-125 delay-150" />
              </div>
            </a>
            <div className="border-r h-7 border-gray-400"></div>
            <a href="/Cart">
              <div id="cart">
                <HiOutlineShoppingBag className="w-6 h-6 hover:text-green-500 transition ease-in-out hover:scale-125 delay-150 " />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export { AboveNavBarLargeScreen, AboveNavBarMobile };
