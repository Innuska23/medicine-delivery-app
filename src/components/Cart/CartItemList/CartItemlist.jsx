import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import s from "./CarItemList.module.css";
import { selectedOrderItems } from "../../../redux/selectors/orderActions";
import {
  removeOrder,
  updateQuantity,
} from "../../../redux/reducers/orderReducer";
import { NavLink } from "react-router-dom";

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedOrderItems);

  const handleRemoveItem = (itemId) => {
    dispatch(removeOrder(itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(
      updateQuantity({
        id: itemId,
        quantity: newQuantity,
      })
    );
  };

  return (
    <div className={s.wrapper}>
      {cartItems?.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          handleRemoveItem={handleRemoveItem}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ))}
      {cartItems.length === 0 && (
        <p>
          {" "}
          Choose medicine in{" "}
          <NavLink to="/shop" className={s.link}>
            Shop
          </NavLink>
        </p>
      )}
    </div>
  );
};

export default CartItemList;
