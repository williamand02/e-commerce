import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../views/NotFound";
import ProductDetails from "../views/ProductDetails";
import ProductsView from "../views/ProductsView";
import ProductCreate from "../views/ProductCreate";
import ProductUpdate from "../views/ProductUpdate";

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/product/update/:id" element={<ProductUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
