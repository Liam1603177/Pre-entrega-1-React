import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Category,
  ConditionalRendering,
  Home,
  Item,
  NotFound,
  Memo,
  Checkout,
} from "../pages";
import { NavBar } from "../components";

export const PublicRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/item/:id" element={<Item />} />
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/conditional/rendering"
          element={<ConditionalRendering />}
        />
        <Route exact path="/memo" element={<Memo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};