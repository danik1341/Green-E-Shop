import { Rating } from "flowbite-react";
import GreenAppleIMG from "../assets/Proucts/Fruits/Green-Apples.svg";
import ChaniseCabbageIMG from "../assets/Proucts/Veg/Chanise-Cabbage.svg";
import GreenLatuceIMG from "../assets/Proucts/Veg/Green-Lettuce.svg";
import GreenChilliIMG from "../assets/Proucts/Veg/Green-Chili.svg";
import CornIMG from "../assets/Proucts/Veg/Corn.svg";
import { LiaCartPlusSolid } from "react-icons/lia";

function FeaturedProducts() {
  return (
    <div className="">
      <div id="Featured-Products-Header" className="mt-12 mb-12">
        <h1 className="font-bold text-5xl text-center mx-6">
          Featured Products
        </h1>
      </div>
      <div
        id="products"
        className="flex-col flex lg:flex-row gap-6 mx-6 lg:gap-0 lg:mx-0 justify-around"
      >
        {/* {Green Apple Card} */}
        <div
          id="Green Apple"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Apple-Img">
            <img
              src={GreenAppleIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-1">
              <div>
                <p className="text-slate-400">Green Apple</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Apple Card} */}
        {/* {Chainse Cabbage Card} */}
        <div
          id="Chanise-Cabbage"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Chanise-Cabbage-Img">
            <img
              src={ChaniseCabbageIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-1">
              <div>
                <p className="text-slate-400">Chanise Cabbage</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Chainse Cabbage Card} */}
        {/* {Green Lettuce Card} */}
        <div
          id="Green-Lettuce"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Lettuce-Img">
            <img
              src={GreenLatuceIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-1">
              <div>
                <p className="text-slate-400">Green Lettuce</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Lettuce Card} */}
        {/* {Green Chilli Card} */}
        <div
          id="Green-Chilli"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Chilli-Img">
            <img
              src={GreenChilliIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-1">
              <div>
                <p className="text-slate-400">Green Chilli</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Green Chilli Card} */}
        {/* {Corn Card} */}
        <div
          id="Corn"
          className="border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Green-Chilli-Img">
            <img
              src={CornIMG}
              alt=""
              className="ms-auto me-auto lg:ms-0 lg:me-0"
            />
          </div>
          <div className="flex justify-between">
            {/* {item-desc + add to cart button container} */}
            <div className="item-desc ms-1">
              <div>
                <p className="text-slate-400">Corn</p>
              </div>
              <div id="item-price">
                <p>$14.99</p>
              </div>
              <div id="item-rating & add to card button">
                <div className="my-3">
                  <button>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </button>
                </div>
              </div>
            </div>
            <div id="bag-icon-on-product-card" className="me-3">
              <button>
                <LiaCartPlusSolid className="h-9 w-9 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
              </button>
            </div>
          </div>
        </div>
        {/* {Corn Card} */}
      </div>
    </div>
  );
}
export { FeaturedProducts };
