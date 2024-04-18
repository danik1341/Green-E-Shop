import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
import Popup from "../Components/EmailPopUp";
import {
  FeaturedProducts,
  FeaturedProductsExtension,
  ShopByCatagories,
} from "../Components/FeaturedProducts";
import { HeroSection, HeroSectionUnderCards } from "../Components/HeroSection";
import { LargeScreenNavBar } from "../Components/NavBar";

function HomePage() {
  return (
    <div>
      <AboveNavBarLargeScreen />
      <Popup />
      <AboveNavBarMobile />
      <LargeScreenNavBar />
      <HeroSection />
      <HeroSectionUnderCards />
      <FeaturedProducts />
      <FeaturedProductsExtension />
      <ShopByCatagories />
    </div>
  );
}
export { HomePage };
