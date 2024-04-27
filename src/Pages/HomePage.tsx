import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
import { CatagoriesMobileScreen } from "../Components/CatagoriesMobileScreen";
import Popup from "../Components/EmailPopUp";
import {
  FeaturedProducts,
  FeaturedProductsExtension,
  ShopByCatagories,
  ShopByCatagoriesExt,
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
      <CatagoriesMobileScreen />
      <ShopByCatagoriesExt />
    </div>
  );
}
export { HomePage };
