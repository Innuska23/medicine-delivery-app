import { useState, useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartForm from "../../components/Cart/CartForm/CartForm";
import CartItemList from "../../components/Cart/CartItemList/CartItemlist";
import {
  selectedOrderItems,
  selectedOrderTotalPrice,
} from "../../redux/selectors/orderActions";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { resetOrder } from "../../redux/reducers/orderReducer";
import Loader from "../../components/Loader/Loader";

import s from "./CartPage.module.css";

const CartPage = () => {
  const formId = useId();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectedOrderTotalPrice);
  const orderItems = useSelector(selectedOrderItems);
  const [createOrder] = useCreateOrderMutation();
  const [isLoading, setIdLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setIdLoading(true);

    try {
      await createOrder({
        ...formData,
        products: orderItems,
      });
      dispatch(resetOrder());
    } catch (e) {
      console.error(e);
    } finally {
      setIdLoading(false);
    }
  };

  return (
    <div className={s.wrapperCart}>
      <div className={s.cartElement}>
        <CartForm onSubmit={handleFormSubmit} id={formId} />
        <CartItemList />
      </div>
      <div className={s.totalPrice}>
        <p className={s.totalPriceText}>Total price: {totalPrice}</p>
        <button
          form={formId}
          type="submit"
          className={s.buttonSubmit}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
