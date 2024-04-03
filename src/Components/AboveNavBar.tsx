import { HiOutlineMapPin } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
function AboveNavBarLargeScreen() {
  return (
    <div
      style={{
        backgroundColor: `#333333`,
      }}
      className=" flex-wrap justify-between mx-auto lg:mx-0 hidden lg:flex"
    >
      <div id="location-selector" className="ms-14 flex">
        <div>
          <HiOutlineMapPin className="text-slate-400 mt-3 me-1" />
        </div>
        <form className="max-w-sm mx-auto">
          <label htmlFor="underline_select" className="sr-only"></label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-1/1 text-sm text-gray-500 bg-transparent  border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Store Location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
      <div className="flex gap-12 me-14" id="lang-currency-container">
        <div id="lang-selector">
          <form className="max-w-sm mx-auto">
            <label htmlFor="underline_select" className="sr-only"></label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-1/1 text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected value="US">
                ENG
              </option>
              <option value="FR">FR</option>
              <option value="DE">GER</option>
            </select>
          </form>
        </div>
        <div id="currency-selector">
          <form className="max-w-sm mx-auto">
            <label htmlFor="underline_select" className="sr-only"></label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-1/1 text-sm text-gray-500 bg-transparent border-0   appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected value="US">
                USD
              </option>
              <option value="EURO">EURO</option>
            </select>
          </form>
        </div>
        <div
          id="login-logout-container"
          className="flex mt-2.5 text-sm text-gray-500"
        >
          <div>
            <button>Sign in</button>
          </div>
          <p className="mx-1">/</p>
          <div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboveNavBarMobile() {
  return (
    <div className="">
      {/* {card icon + like icon} */}
      <div className="flex gap-2">
        <div>
          <a href="/Liked">
            <button>
              <IoIosHeartEmpty className="  text-gray-500 w-5 h-5" />
            </button>
          </a>
        </div>
        <div className="border-r"></div>
        <div>
          <a href="/Cart">
            <button>
              <SlHandbag className="  text-gray-500 w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
      {/* {card icon + like icon} */}
    </div>
  );
}
export { AboveNavBarLargeScreen, AboveNavBarMobile };
