import { useState } from "react";
import PopUpImg from "../assets/EmailPopupIMG.svg";
import { IoCloseOutline } from "react-icons/io5";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      {/* Semi-transparent overlay */}
      <div className="fixed inset-0 flex-col flex lg:flex-row justify-center items-center">
        <div className="bg-white w-1/2 p-6 rounded shadow-lg">
          <div className="flex">
            <div id="popup-img">
              <img src={PopUpImg} alt="" />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-5xl text-center mx-6">
                  Subcribe to Our
                  <br /> Newsletter
                </h1>
              </div>
              <div>
                <p className="text-center mt-6 text-slate-400">
                  Subscribe to our newlletter and Save your{" "}
                  <span className="text-orange-500">
                    20%
                    <br /> money
                  </span>{" "}
                  with discount code today.
                </p>
              </div>
              <div>
                <div className="flex justify-center mt-12">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:green-blue-500"
                  />
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-5" onClick={handleClose}>
            <IoCloseOutline className="w-9 h-9" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
