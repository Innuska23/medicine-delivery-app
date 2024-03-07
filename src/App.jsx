import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage/StorePage";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/medicine-delivery-app/shop" element={<StorePage />} />
            <Route path="/medicine-delivery-app/cart" element={<CartPage />} />
            <Route
              path="*"
              element={<Navigate to="/medicine-delivery-app/shop" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
