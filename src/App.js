import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/FeaturedProducts";
import NoMatchFound from "./components/NoMatchFound";
import OrderSummary from "./components/OrderSummary";
import UserDetails from "./components/UserDetails";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import About from "./components/About";
import Admin from "./components/Admin";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured-products' element={<FeaturedProducts />} />
            <Route path='new-products' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='*' element={<NoMatchFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
