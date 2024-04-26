import { AboveNavBarLargeScreen } from "./AboveNavBar";
import { BsHouseDoor } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { AboveNavBarMobile } from "./AboveNavBar";
import { LargeScreenNavBar } from "./NavBar";

function SignUp() {
  return (
    <div>
      <AboveNavBarLargeScreen />
      <AboveNavBarMobile />
      <LargeScreenNavBar />
      <div id="register-banner">
        <div
          className="h-24"
          style={{
            backgroundImage: "url(SignInHeader.svg)",
          }}
        >
          <div id="banner-text-container" className="flex p-8 ms-12">
            <div>
              <BsHouseDoor className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <MdOutlineKeyboardArrowRight className="w-5 h-5 text-gray-400 mt-1" />
            </div>
            <div>
              <p className="text-gray-400 mt-0.5">Register</p>
            </div>
            <div>
              <MdOutlineKeyboardArrowRight className="w-5 h-5 text-gray-400 mt-1" />
            </div>
          </div>
        </div>
      </div>
      <div className=" ms-auto me-auto border w-1/2 mt-24 rounded-lg p-24 shadow-2xl">
        <div>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Repeat password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-green-400 focus:outline-none font-medium rounded-2xl text-sm w-full py-2.5 text-center"
            >
              Register new account
            </button>
          </form>
          <div className="flex gap-2 mt-3 justify-center">
            <div>
              {" "}
              <p>Already have an account? </p>
            </div>
            <div>
              <a href="/SignIn">
                <p className="font-bold">Login</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { SignUp };
