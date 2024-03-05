import { BrowserRouter, Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage/StorePage";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/shop" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<StorePage />} />
          <Route path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
