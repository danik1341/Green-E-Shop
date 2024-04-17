import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import {
  HeroSection,
  HeroSectionUnderCards,
} from "../Components/HeroSectionHomePage";
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
    </div>
  );
}
export { HomePage };
