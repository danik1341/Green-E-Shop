import Basket from "../assets/HeroSectionBasketFruits.svg";
import DeliveryIMG from "../assets/Card-1-icon-shipping.svg";
import CustomerSupportIMG from "../assets/Card-2-icon-support.svg";
import ProtectionIMG from "../assets/Card-3-icon-secure.svg";
import MoneyBackIMG from "../assets/Card-4-icon-moneyback.svg";

function HeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(HeroSectionBG.svg)",
          height: "90vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#EDF2EE",
        }}
        className="flex flex-col lg:flex-row justify-center"
      >
        <div id="hero-section-img-basket">
          <img
            className="lg:mt-32 lg:me-12 me-auto ms-auto mt-0 lg:w-full mx-6"
            src={Basket}
            alt=""
          />
        </div>
        <div
          id="hero-section-text"
          className="lg:mt-auto lg:mb-auto lg:text-left text-center mx-6"
        >
          <div>
            <p
              className="font-bold my-3"
              style={{
                color: "#00B207",
              }}
            >
              WELCOME TO SHOPPER
            </p>
          </div>
          <div>
            <h1 className="font-bold text-6xl">
              Fresh & Healthy
              <br /> Organic Food
            </h1>
          </div>
          <div className="mt-5">
            <p className="font-bold">
              Sale up to{" "}
              <span
                style={{
                  color: "#FF8A00",
                }}
              >
                30% OFF
              </span>
            </p>
          </div>
          <div>
            <p className="text-slate-500 mt-3">
              Free shipping on all your order. we deliver, you enjoy
            </p>
          </div>
          <div id="shop-now-button-hero-section-home-page">
            <button
              style={{
                backgroundColor: "#00B207",
              }}
              type="button"
              className="text-white mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Choose plan
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function HeroSectionUnderCards() {
  return (
    <div
      id="hero-cards"
      className="mx-auto flex gap-6 lg:gap-0 flex-col lg:flex-row lg:mx-12 lg:p-12 lg:justify-between mt-12 mb-12 lg:rounded-lg lg:border p-0  lg:shadow-xl"
    >
      <div
        id="card-1-container"
        className="flex-col flex lg:flex-row lg:mt-auto lg:gap-6 lg:mb-auto"
      >
        <div className="lg:ms-0 lg:me-0 ms-auto me-auto">
          <img src={DeliveryIMG} alt="" />
        </div>
        <div id="card-1-text" className="text-center lg:text-left">
          <div>
            <p className="font-semibold">Free Shipping</p>
          </div>
          <div>
            <p className="text-slate-400">Free shipping on all your order</p>
          </div>
        </div>
      </div>
      <div className="border-r"></div>
      <div
        id="card-2-container"
        className="flex-col flex lg:flex-row lg:mt-auto lg:gap-6 lg:mb-auto"
      >
        <div className="lg:ms-0 lg:me-0 ms-auto me-auto">
          <img src={CustomerSupportIMG} alt="" />
        </div>
        <div id="card-2-text" className="text-center lg:text-left">
          <div>
            <p className="font-semibold">Customer Support 24/7</p>
          </div>
          <div>
            <p className="text-slate-400">Instant access to Support</p>
          </div>
        </div>
      </div>
      <div className="border-r"></div>
      <div
        id="card-3-container"
        className="flex-col flex lg:flex-row lg:mt-auto lg:gap-6 lg:mb-auto"
      >
        <div className="lg:ms-0 lg:me-0 ms-auto me-auto">
          <img src={ProtectionIMG} alt="" />
        </div>
        <div id="card-3-text" className="text-center lg:text-left">
          <div>
            <p className="font-semibold">100% Secure Payment</p>
          </div>
          <div>
            <p className="text-slate-400">We ensure your money is safe</p>
          </div>
        </div>
      </div>
      <div className="border-r"></div>

      <div
        id="card-4-container"
        className="flex-col flex lg:flex-row lg:mt-auto lg:gap-6 lg:mb-auto"
      >
        <div className="lg:ms-0 lg:me-0 ms-auto me-auto">
          <img src={MoneyBackIMG} alt="" />
        </div>
        <div id="card-4-text" className="text-center lg:text-left">
          <div>
            <p className="font-semibold">Money-Back Guarantee</p>
          </div>
          <div>
            <p className="text-slate-400">30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { HeroSection, HeroSectionUnderCards };
