import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages";

export const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};