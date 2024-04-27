import { Dropdown } from "flowbite-react";
import Logo from "../assets/Logo.svg";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

("use client");

function LargeScreenNavBar() {
  return (
    <div className="max-w-screen-xxl flex-wrap justify-around lg:mx-0 hidden lg:flex">
      {/* {large-nav-bar-links} */}
      <div id="nav-bar-conatiner-large-screen">
        <div id="nav-links" className="mt-5 mx-auto flex gap-5">
          {/* {Large nav-bar home button} */}
          <a href="#">
            <Dropdown inline color="grey" label="Home" dismissOnClick={false}>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
            </Dropdown>
          </a>
          {/* {Large nav-bar pages button} */}
          <a href="#">
            <Dropdown inline color="grey" label="Pages" dismissOnClick={false}>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
            </Dropdown>
          </a>
          {/* {Large nav-bar blog button} */}
          <a href="#">
            <Dropdown inline color="grey" label="Blog" dismissOnClick={false}>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
              <Dropdown.Item>Example</Dropdown.Item>
            </Dropdown>
          </a>
          <a href="#">
            <button>About us</button>
          </a>
        </div>
      </div>
      {/* {large-nav-bar-logo-container} */}
      <div className="flex mt-3">
        <div>
          <a href="/">
            <img src={Logo} alt="Ecobazar logo" />
          </a>
        </div>
        <div>
          <a href="/">
            <p className=" text-3xl ms-2">EcoBazar</p>
          </a>
        </div>
      </div>
      {/* {phone large nav-bar container} */}
      {/* {search-cart-likes container} */}
      <div className="flex mt-4 gap-5">
        <div id="phone">
          <div className="flex mt-1 me-3">
            <div>
              <PiPhoneCallBold className="w-7 h-7" />
            </div>
            <div>
              <a href="tel:(219) 555-0114">(219) 555-0114</a>
            </div>
          </div>
        </div>
        <div id="search">
          <button>
            <div
              style={{
                padding: "0",
              }}
              className="relative flex flex-col justify-center overflow-hidden "
            >
              <div className="relative bg-white max-w-lg">
                <div className=" max-w-md">
                  <form action="" className="relative w-max">
                    <input
                      type="search"
                      className="peer relative z-10 h-8 w-8 cursor-pointer me-2 rounded-full bg-transparent outline-none focus:w-96 focus:cursor-text focus:mt-0.5 focus:ms-1 focus:pl-16 focus:pr-4 transition-all duration-700 border-none"
                    />
                    <IoIosSearch
                      className="peer absolute font-bold inset-y-0 my-auto ms-2 h-8 w-8
                      border-transparent stroke-gray-500 transition-all duration-500 "
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
        <a href="/Liked">
          <div id="likes">
            <IoIosHeartEmpty className="w-8 h-8  hover:text-rose-500 transition ease-in-out hover:scale-125 delay-150" />
          </div>
        </a>
        <a href="/Cart">
          <div id="cart">
            <HiOutlineShoppingBag className="w-8 h-8 hover:text-green-500 transition ease-in-out hover:scale-125 delay-150 " />
          </div>
        </a>
      </div>
    </div>
  );
}

export { LargeScreenNavBar };
