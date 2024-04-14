import Basket from "../assets/HeroSectionBasketFruits.svg";
function HeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(HeroSectionBG.svg)",
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#EDF2EE",
        }}
        className="flex"
      >
        <div id="hero-section-img-basket">
          <img src={Basket} alt="" />
        </div>
        <div id="hero-section-text" className="mt-auto mb-auto">
          <div>
            <p
              className="font-bold"
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
            <p>Free shipping on all your order. we deliver, you enjoy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
