import { LuMapPin } from "react-icons/lu";
function AboveNavBar() {
  return (
    <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto bg-green-100">
      <div id="location-selector" className="flex lg:ms-0">
        <div className="mt-5 me-2 text-slate-400 ms-5">
          <LuMapPin
            style={{
              color: `#2B572E`,
            }}
          />
        </div>
        <div>
          <form className="w-36">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              style={{
                color: `#2B572E`,
              }}
              id="countries"
              className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Location</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
      </div>
      <div id="currency-lang-container" className="flex">
        <div id="lang" className="flex">
          <div className="mt-5 me-2 text-slate-400"></div>
          <div>
            <form className="lg:w-32 w-24">
              <label
                htmlFor="lang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <select
                style={{
                  color: `#2B572E`,
                }}
                id="lang"
                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected value="US">
                  ENG
                </option>
                <option value="FR">FRN</option>
                <option value="DE">GER</option>
              </select>
            </form>
          </div>
        </div>
        <div id="currency" className="flex">
          <div className="mt-5 me-2 text-slate-400"></div>
          <div>
            <form className="lg:w-32 w-24">
              <label
                htmlFor="currency"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <select
                style={{
                  color: `#2B572E`,
                }}
                id="currency"
                className="block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected value="US">
                  USD
                </option>
                <option value="CA">CAD</option>
                <option value="EU">EU</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboveNavBar };
