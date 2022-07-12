import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductDetail from "../src/components/ProductList/ProductDetail/ProductDetail";
import Payment from "./components/Payment/Payment";
// import PaymentSuccess from "./components/Payment/PaymentSuccess/PaymentSuccess";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";

//productList.filter( item => item.price <= maxInput && item.price >= minInput)

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/payment-success" element={<PaymentSuccess />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
