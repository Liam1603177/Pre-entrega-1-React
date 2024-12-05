import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, Item, NotFound } from "../pages";
import { NavBar } from "../components";
//HOC --> Higher order component (HOF --> Higher Order Function)
export const PublicRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/item/:id" element={<Item />} />
        <Route exact path="/category/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};