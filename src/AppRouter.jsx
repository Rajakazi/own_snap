// AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import WelcomePage from "./pages/Welcome";
import JoinPage from "./pages/Join";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
