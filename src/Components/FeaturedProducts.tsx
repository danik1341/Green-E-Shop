import { Rating } from "flowbite-react";
// {product images}
import GreenAppleIMG from "../assets/Proucts/Fruits/Green-Apples.svg";
import GreenAppleSmallIMG from "../assets/Proucts/Fruits/GreenApplesSmall.svg";
import ChaniseCabbageIMG from "../assets/Proucts/Veg/Chanise-Cabbage.svg";
import GreenLatuceIMG from "../assets/Proucts/Veg/Green-Lettuce.svg";
import GreenChilliIMG from "../assets/Proucts/Veg/Green-Chili.svg";
import SummerSaleBG from "../assets/SummerSaleBackGround.svg";
import CornIMG from "../assets/Proucts/Veg/Corn.svg";
import OrangeSmallIMG from "../assets/Proucts/Fruits/Indian-Orange.svg";
import LettuceSmallIMG from "../assets/Proucts/Veg/LettuceSmallIMG.svg";
import EggPlantSmallIMG from "../assets/Proucts/Veg/EggPlant.svg";
import RedCapsicumSmallIMG from "../assets/Proucts/Veg/RedCapsicum.svg";
import RedTomatoSmallIMG from "../assets/Proucts/Veg/RedTomato.svg";
import PotatoSmallIMG from "../assets/Proucts/Veg/Potato.svg";
import CornSmallIMG from "../assets/Proucts/Veg/CornSmallImg.svg";
import SamllColiflowerImg from "../assets/Proucts/Veg/FreshCauliflower.svg";
// {product images}
// {Catagory images}
import VegCatagoryIcon from "../assets/Catagory-icons/Vegetables.svg";
import FruitCatagoryIcon from "../assets/Catagory-icons/FreshFruit.svg";
import FishCatagoryIcon from "../assets/Catagory-icons/Fish.svg";
import MeatCatagoryIcon from "../assets/Catagory-icons/Meat.svg";
import DrinksCatagoryIcon from "../assets/Catagory-icons/Water and Drinks.svg";
import SnacksCatagoryIcon from "../assets/Catagory-icons/Snacks.svg";
// {Catagory images}
import { HiArrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ButtonsAppearOnHover } from "./Buttons";

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
function FeaturedProductsExtension() {
  return (
    <div className="mt-12 flex-col flex lg:flex-row lg:gap-12 ms-0 lg:ms-12  justify-around  me-auto mx-5">
      {/* {Hot deals section} */}
      <div
        id="Hot-Deals-Container"
        className="flex-col mx-6 lg:mx-0 mt-7 lg:mt-0"
      >
        <div>
          <h1 className="font-semibold ms-1.5 text-center lg:text-left">
            Hot Deals
          </h1>
        </div>
        {/* {apple card} */}
        <div
          id="green-apple"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
        >
          <div id="green-apple-img">
            <img
              src={GreenAppleSmallIMG}
              alt="green apple"
              className="me-4 mt-3"
            />
          </div>
          <div id="green-apple-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Apple</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
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
                <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {apple card} */}
        {/* {Orange card} */}
        <div
          id="orange"
          className="group justify-around flex my-6 px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
        >
          <div id="orange-img">
            <img src={OrangeSmallIMG} alt="orange" className="me-4 mt-3" />
          </div>
          <div id="orange-text" className="mt-5  mb-auto">
            <div>
              <p className="text-slate-400">Orange</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
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
                <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Orange card} */}
        {/* {Lettuce card} */}
        <div
          id="Green-Lettuce"
          className="group justify-around flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
        >
          <div id="green-lettuce-img">
            <img
              src={LettuceSmallIMG}
              alt="green apple"
              className="me-4 mt-3"
            />
          </div>
          <div id="green-lettuce-text" className="mt-5 mb-auto">
            <div>
              <p className="text-slate-400">Green Lettuce</p>
            </div>
            <div>
              <p>$14.99</p>
            </div>
            <div>
              {" "}
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
                <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                  <ButtonsAppearOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Lettuce card} */}
      </div>
      {/* {Hot deals section} */}
      {/* {best seller container} */}
      <div id="best-seller-container" className=" mx-6 lg:mx-0 mt-7 lg:mt-0">
        <div>
          <h1 className="font-bold text-center lg:text-left">Best Sellers</h1>
        </div>
        {/* {eggplant card} */}
        <div id="eggplant-card">
          <div
            id="eggplant-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="eggplant-img">
              <img
                src={EggPlantSmallIMG}
                alt="eggplant"
                className="me-4 mt-3"
              />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Eggplant</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {eggplant card} */}
        {/* {Red Capsicum card} */}
        <div id="RedCapsicum-card">
          <div
            id="RedCapsicum-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="RedCapsicum-img">
              <img
                src={RedCapsicumSmallIMG}
                alt="RedCapsicum"
                className="me-4 mt-3"
              />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Red Capsicum</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Red Capsicum card} */}
        {/* {Red Tomato card} */}
        <div id="RedTomato-card">
          <div
            id="RedTomato-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="RedTomato-img">
              <img
                src={RedTomatoSmallIMG}
                alt="RedTomato"
                className="me-4 mt-3"
              />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Red Tomato</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Red Tomato card} */}
      </div>
      {/* {best seller container} */}
      {/* {top rated container} */}
      <div id="top-rated-container" className=" mx-6 lg:mx-0 mt-7 lg:mt-0">
        <div>
          <h1 className="font-bold text-center lg:text-left">Top Rated</h1>
        </div>
        {/* {Potato card} */}
        <div id="Potato-card">
          <div
            id="Potato-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="Potato-img">
              <img src={PotatoSmallIMG} alt="Potato" className="me-4 mt-3" />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Potato</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Potato card} */}
        {/* {Corn card} */}
        <div id="Corn-card">
          <div
            id="Corn-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="Corn-img">
              <img src={CornSmallIMG} alt="Corn" className="me-4 mt-3" />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Corn</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Corn card} */}
        {/* {Cauliflower card} */}
        <div id="Cauliflower-card">
          <div
            id="Cauliflower-card"
            className="group justify-around my-6 flex px-5 border rounded-lg lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl"
          >
            <div id="Cauliflower-img">
              <img
                src={SamllColiflowerImg}
                alt="Cauliflower"
                className="me-4 mt-3"
              />
            </div>
            <div id="green-lettuce-text" className="mt-5 mb-auto">
              <div>
                <p className="text-slate-400">Cauliflower</p>
              </div>
              <div>
                <p>$14.99</p>
              </div>
              <div>
                {" "}
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
                  <div className="opacity-0 group-hover:transition-opacity group-hover:ease-in delay-1000 duration-700 group-hover:opacity-100">
                    <ButtonsAppearOnHover />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Cauliflower card} */}
      </div>
      {/* {top rated container} */}
      {/* {Summer sale Container} */}
      <div
        id="featured-products-summer-sale-container"
        className="mt-auto mb-auto ms-auto me-auto relative"
      >
        <img src={SummerSaleBG} alt="" />
        <div className="absolute mt-16 top-0 left-0 w-full h-full flex-col items-center justify-center">
          <h2 className="text-center font-bold">Summer Sale</h2>
          <h1 className="font-bold text-green-500 my-4 text-center text-5xl">
            75% off
          </h1>
          <div className="flex">
            <div>
              <button className="justify-center items-center px-10 py-2 rounded-full mx-20 bg-white text-green-400 hover:shadow-xl">
                Shop now
                <span className="absolute mt-1 ms-2 me-5">
                  <HiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {Summer sale Container} */}
    </div>
  );
}
function ShopByCatagories() {
  return (
    <div
      style={{
        backgroundColor: "rgba(242, 245, 243, 1)",
      }}
    >
      <div
        id="shop-by-catagories-header"
        className="flex mx-26 justify-between p-12 align-baseline"
      >
        <div>
          <h1 className="font-bold text-3xl">Shop by Top Categories</h1>
        </div>
        <div>
          <button className="flex mt-1.5">
            <p className="text-green-400">View all</p>
            <span>
              <HiOutlineArrowNarrowRight className="mt-1 ms-1 text-green-400" />
            </span>
          </button>
        </div>
      </div>
      <div id="catagories" className="flex mx-6 justify-center gap-12">
        {/* {Veg Catagory} */}
        <div
          id="veg-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="veg-catagory-icon">
            <img className="ms-auto me-auto" src={VegCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Vegetables
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Veg Catagory} */}
        {/* {Fruit Catagory} */}
        <div
          id="fruit-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="fruit-catagory-icon">
            <img className="ms-auto me-auto" src={FruitCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Fresh Fruit
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">137 Products</p>
            </div>
          </div>
        </div>
        {/* {Fruit Catagory} */}
        {/* {Fish Catagory} */}
        <div
          id="Fish-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Fish-catagory-icon">
            <img className="ms-auto me-auto" src={FishCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Fish
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">34 Products</p>
            </div>
          </div>
        </div>
        {/* {Fish Catagory} */}
        {/* {Meat Catagory} */}
        <div
          id="Meat-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Meat-catagory-icon">
            <img className="ms-auto me-auto" src={MeatCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Meat
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Meat Catagory} */}
        {/* {Water&Drinks Catagory} */}
        <div
          id="Water-and-drinks-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Water-and-drinks-catagory-icon">
            <img className="ms-auto me-auto" src={DrinksCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Water and Drinks
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">48 Products</p>
            </div>
          </div>
        </div>
        {/* {Water&Drinks Catagory} */}
        {/* {Snacks Catagory} */}
        <div
          id="Snacks-catagory"
          className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
        >
          <div id="Snacks-catagory-icon">
            <img className="ms-auto me-auto" src={SnacksCatagoryIcon} alt="" />
          </div>
          <div id="card-text" className="text-center mt-5">
            <div>
              <p className="group-hover:text-green-400 group-hover:delay-150">
                Snacks
              </p>
            </div>
            <div>
              <p className="mt-1.5 text-slate-500">165 Products</p>
            </div>
          </div>
        </div>
        {/* {Snacks Catagory} */}
      </div>
    </div>
  );
}
export { FeaturedProducts, FeaturedProductsExtension, ShopByCatagories };
