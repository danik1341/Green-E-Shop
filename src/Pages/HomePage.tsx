import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
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
    </div>
  );
}
export { HomePage };
