import {
  AboveNavBarLargeScreen,
  AboveNavBarSmallerScreens,
} from "./AboveNavBar";

function NavBar() {
  return (
    <div>
      <div>
        <AboveNavBarLargeScreen />
        <AboveNavBarSmallerScreens />
      </div>
    </div>
  );
}
export { NavBar };
