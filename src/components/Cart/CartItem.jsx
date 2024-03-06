import PropTypes from "prop-types";
import s from "./CartItem.module.css";
import defaultImg from "../../assets/default.jpg";

const CartItem = ({ item, handleRemoveItem, handleUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      handleUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={s.cartWrapper}>
      <div className={s.cartItem}>
        <div className={s.cartImageWrapper}>
          {/* src={item.cartImageUrl}  */}
          <img src={defaultImg} alt={item.name} />
        </div>
        <div className={s.cartInfoContainer}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <div className={s.cartQuantity}>
            <input
              type="number"
              value={item.quantity}
              onChange={handleQuantityChange}
              className={s.cartInput}
            />
            <button
              onClick={() => handleRemoveItem(item.id)}
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
