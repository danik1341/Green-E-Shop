import { HiOutlineMapPin } from "react-icons/hi2";
import ReactLoginModel from "./Modals";

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
            <ReactLoginModel />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboveNavBarLargeScreen };
