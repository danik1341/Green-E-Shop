import { useState } from "react";
import { Sidebar, Select, Label } from "flowbite-react";
import { Transition } from "react-transition-group";
import { HiUser, HiX } from "react-icons/hi";
import { FaHome, FaShoppingBasket } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Logo from "../assets/Logo.svg";

function SideBarMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <button
        onClick={toggleSidebar}
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
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <Transition in={isSidebarOpen} timeout={50}>
        {(state) => (
          <div
            style={{
              transition: "transform 300ms ease-in-out",
              transform:
                state === "entered" ? "translateX(0)" : "translateX(-100%)",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 50,
            }}
          >
            <div className="flex justify-between bg-gray-50">
              <div className="flex p-4">
                <button
                  onClick={closeSidebar}
                  type="button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <a href="/SignIn">
                  <HiUser className="w-6 h-6 text-gray-500" />
                </a>
              </div>
            </div>
            <Sidebar aria-label="MobileSideBar">
              <Sidebar.Logo
                className="text-black"
                href="#"
                img={Logo}
                imgAlt="Ecobazar logo"
              >
                Ecobazar
              </Sidebar.Logo>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Collapse
                    icon={FaHome}
                    label="Home"
                    renderChevronIcon={(theme, open) => {
                      const IconComponent = open
                        ? HiOutlineMinusSm
                        : HiOutlinePlusSm;

                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[open ? "on" : "off"]
                          )}
                        />
                      );
                    }}
                  >
                    <Sidebar.Item href="#">example</Sidebar.Item>
                    <Sidebar.Item href="#">example</Sidebar.Item>
                    <Sidebar.Item href="#">example</Sidebar.Item>
                    <Sidebar.Item href="#">example</Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="#" icon={FaShoppingBasket}>
                    Shop
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={MdFindInPage}>
                    Pages
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaBloggerB}>
                    Blog
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaQuestion}>
                    About Us
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item icon={BsCurrencyDollar}>
                    <div className="max-w-md">
                      <div className="block">
                        <Label htmlFor="currency" />
                      </div>
                      <Select id="currency" required>
                        <option>USD</option>
                        <option>EURO</option>
                      </Select>
                    </div>
                  </Sidebar.Item>
                  <Sidebar.Item icon={CiLocationOn}>
                    <div className="max-w-md">
                      <div className="block">
                        <Label htmlFor="currency" />
                      </div>
                      <Select id="currency" required>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>France</option>
                      </Select>
                    </div>
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        )}
      </Transition>
    </>
  );
}

export { SideBarMobile };
