import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NotFoundPage } from "./Pages/NotFound";
import { CartPage } from "./Pages/CartPage";
import { LikedItemsPage } from "./Pages/LikedItemsPage";
import { SignIn } from "./Components/SignIn";
import { SignUpPage } from "./Pages/SignUp";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Liked" element={<LikedItemsPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        {/* {error page} */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export { Pages };
