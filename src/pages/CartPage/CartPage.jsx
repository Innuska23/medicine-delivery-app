// import { useState, useEffect } from "react";
// import CartForm from "../../components/Cart/CartForm/CartForm";
// import CartItemList from "../../components/Cart/CartItemList/CartItemlist";
// import s from "./CartPage.module.css";
// import defaultimg from "../../assets/default.jpg";

// const CartPage = () => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       price: 10,
//       quantity: 8,
//       name: "Pen",
//       imageUrl: defaultimg,
//     },
//     {
//       id: 2,
//       price: 10,
//       quantity: 8,
//       name: "Pen",
//       imageUrl: defaultimg,
//     },
//     {
//       id: 3,
//       price: 10,
//       quantity: 8,
//       name: "Pen",
//       imageUrl: defaultimg,
//     },
//   ]);

//   const handleRemoveItem = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const handleUpdateQuantity = (itemId, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleSubmit = (formData) => {
//     console.log("Form submitted!", formData);
//   };

//   useEffect(() => {
//     const calculateTotalPrice = () => {
//       let total = 0;
//       cartItems.forEach((item) => {
//         total += item.price * item.quantity;
//       });
//       setTotalPrice(total);
//     };

//     calculateTotalPrice();
//   }, [cartItems]);

//   return (
//     <div className={s.wrapperCart}>
//       <div className={s.cartElement}>
//         <CartForm onSubmit={handleSubmit} />
//         <CartItemList
//           cartItems={cartItems}
//           handleRemoveItem={handleRemoveItem}
//           handleUpdateQuantity={handleUpdateQuantity}
//         />
//       </div>
//       <div className={s.totalPrice}>
//         <p className={s.totalPriceText}>Total price: {totalPrice}</p>
//         <button type="button" className={s.buttonSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import { useState, useEffect } from "react";
import CartForm from "../../components/Cart/CartForm/CartForm";
import CartItemList from "../../components/Cart/CartItemList/CartItemlist";
import s from "./CartPage.module.css";
import defaultimg from "../../assets/default.jpg";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
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
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted!", formData);
    console.log("Cart items:", cartItems);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  return (
    <div className={s.wrapperCart}>
      <div className={s.cartElement}>
        <CartForm onSubmit={handleFormSubmit} />
        <CartItemList
          cartItems={cartItems}
          handleRemoveItem={handleRemoveItem}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      </div>
      <div className={s.totalPrice}>
        <p className={s.totalPriceText}>Total price: {totalPrice}</p>
        <button
          type="button"
          className={s.buttonSubmit}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CartPage;
