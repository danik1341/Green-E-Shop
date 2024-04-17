import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
import {
  FeaturedProducts,
  FeaturedProductsExtension,
} from "../Components/FeaturedProducts";
import { HeroSection, HeroSectionUnderCards } from "../Components/HeroSection";
import { LargeScreenNavBar } from "../Components/NavBar";

function HomePage() {
  return (
    <div>
      <AboveNavBarLargeScreen />
      <AboveNavBarMobile />
      <LargeScreenNavBar />
      <HeroSection />
      <HeroSectionUnderCards />
      <FeaturedProducts />
      <FeaturedProductsExtension />
    </div>
  );
}
export { HomePage };
