import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NotFoundPage } from "./Pages/NotFound";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* {error page} */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export { Pages };
