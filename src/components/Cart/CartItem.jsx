import PropTypes from "prop-types";
import s from "./CartItem.module.css";

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
        <div className={s.imageWrapper}>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className={s.infoContainer}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <div>
            <input
              type="number"
              value={item.quantity}
              onChange={handleQuantityChange}
            />
            <button
              onClick={() => handleRemoveItem(item.id)}
              className={s.buttonDelete}
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
