import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { BelowNavBarLargeScreens } from "../Components/BelowNavBar";
import { NavBar } from "../Components/NavBar";
import { SideBarMobile } from "../Components/SideBar";

function HomePage() {
  return (
    <div>
      <AboveNavBarLargeScreen />
      <SideBarMobile />
      <NavBar />
      <BelowNavBarLargeScreens />
    </div>
  );
}
export { HomePage };
