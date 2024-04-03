import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { NavBar } from "../Components/NavBar";
import { SideBarMobile } from "../Components/SideBar";

function HomePage() {
  return (
    <div>
      <div>
        <AboveNavBarLargeScreen />
        <div>
          <SideBarMobile />
        </div>
        <NavBar />
      </div>
    </div>
  );
}
export { HomePage };
