import PropTypes from "prop-types";

import defaultImg from "../../assets/default.jpg";

import s from "./CartItem.module.css";

const CartItem = ({ item, handleRemoveItem, handleUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      handleUpdateQuantity(item._id, newQuantity);
    }
  };

  return (
    <div className={s.cartWrapper}>
      <div className={s.cartItem}>
        <div className={s.cartImageWrapper}>
          <img src={item.imgSrc || defaultImg} alt={item.name} />
        </div>
        <div className={s.cartInfoContainer}>
          <h2>{item.title}</h2>
          <p>Price: {item.price} ₴</p>
          <div className={s.cartQuantity}>
            <input
              type="number"
              value={item.quantity}
              onChange={handleQuantityChange}
              className={s.cartInput}
            />
            <button
              onClick={() => handleRemoveItem(item._id)}
              className={s.cartButtonDelete}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleUpdateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
