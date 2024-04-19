// {Catagory images}
import VegCatagoryIcon from "../assets/Catagory-icons/Vegetables.svg";
import FruitCatagoryIcon from "../assets/Catagory-icons/FreshFruit.svg";
import FishCatagoryIcon from "../assets/Catagory-icons/Fish.svg";
import MeatCatagoryIcon from "../assets/Catagory-icons/Meat.svg";
import DrinksCatagoryIcon from "../assets/Catagory-icons/Water and Drinks.svg";
import SnacksCatagoryIcon from "../assets/Catagory-icons/Snacks.svg";
// {Catagory images}
import { Carousel } from "flowbite-react";

function CatagoriesMobileScreen() {
  return (
    <div className="mt-12 lg:hidden mx-16">
      <div className="mb-12">
        <p className="font-bold text-center text-3xl">Shop by Catagories</p>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={false} leftControl="<" rightControl=">">
          <div className="flex h-full items-center justify-center dark:text-white">
            <div
              id="veg-catagory"
              className="group bg-white border  py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
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
          </div>
          <div className="flex h-full items-center justify-center dark:text-white">
            {/* {Fruit Catagory} */}
            <div
              id="fruit-catagory"
              className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
            >
              <div id="fruit-catagory-icon">
                <img
                  className="ms-auto me-auto"
                  src={FruitCatagoryIcon}
                  alt=""
                />
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
          </div>
          <div className="flex h-full items-center justify-center dark:text-white">
            {/* {Fish Catagory} */}
            <div
              id="Fish-catagory"
              className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
            >
              <div id="Fish-catagory-icon">
                <img
                  className="ms-auto me-auto"
                  src={FishCatagoryIcon}
                  alt=""
                />
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
          </div>
          <div className="flex h-full items-center justify-center dark:text-white">
            {/* {Meat Catagory} */}
            <div
              id="Meat-catagory"
              className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
            >
              <div id="Meat-catagory-icon">
                <img
                  className="ms-auto me-auto"
                  src={MeatCatagoryIcon}
                  alt=""
                />
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
          </div>
          <div className="flex h-full items-center justify-center dark:text-white">
            {/* {Water&Drinks Catagory} */}
            <div
              id="Water-and-drinks-catagory"
              className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
            >
              <div id="Water-and-drinks-catagory-icon">
                <img
                  className="ms-auto me-auto"
                  src={DrinksCatagoryIcon}
                  alt=""
                />
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
          </div>
          <div className="flex h-full items-center justify-center dark:text-white">
            {/* {Snacks Catagory} */}
            <div
              id="Snacks-catagory"
              className="group bg-white border py-8 px-12 rounded-lg  lg:hover:border-green-400 lg:transition lg:hover:scale-105 lg:delay-150 lg:hover:shadow-xl "
            >
              <div id="Snacks-catagory-icon">
                <img
                  className="ms-auto me-auto"
                  src={SnacksCatagoryIcon}
                  alt=""
                />
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
        </Carousel>
      </div>
    </div>
  );
}
export { CatagoriesMobileScreen };
