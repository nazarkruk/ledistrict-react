import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Payment from "../pages/Payment";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import FrenchMarkets from "../pages/FrenshMarkets";
import Restaurants from "../pages/Restaurants";
import CateringAndEvents from "../pages/CateringAndEvents";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment-success" element={<Payment />} />
        <Route path="/french-markets" element={<FrenchMarkets />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/catering-and-events" element={<CateringAndEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
