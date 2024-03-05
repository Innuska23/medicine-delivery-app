import { useState } from "react";
import CartItem from "../CartItem";
import defaultimg from "../../../assets/default.jpg";
import s from "./CarItemList.module.css";

const CartItemList = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      price: 10,
      quantity: 8,
      name: "Pen",
      imageUrl: defaultimg,
    },
    {
      id: 2,
      price: 10,
      quantity: 8,
      name: "Pen",
      imageUrl: defaultimg,
    },
    {
      id: 3,
      price: 10,
      quantity: 8,
      name: "Pen",
      imageUrl: defaultimg,
    },
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className={s.wrapper}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ))}
    </div>
  );
};

export default CartItemList;
