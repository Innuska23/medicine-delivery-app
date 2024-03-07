import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import defaultimg from "../../../assets/default.jpg";
import { selectedIsInOrderListProduct } from "../../../redux/selectors/orderActions";

import s from "./ShopCard.module.css";

const ShopCard = ({ id, title, onAddToCart, imageSrc, price }) => {
  const isInOrderList = useSelector((state) =>
    selectedIsInOrderListProduct(state, id)
  );

  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <li className={s.card}>
      <div className={s.cardImageContainer}>
        <img className={s.cardImage} src={imageSrc || defaultimg} alt={title} />
      </div>
      <h3 className={s.cardTitle}>{title}</h3>
      <p>Price: {price} ₴</p>
      <button
        className={s.cardButton}
        onClick={handleAddToCart}
        disabled={isInOrderList}
      >
        {isInOrderList ? "In cart" : "Add to Cart"}
      </button>
    </li>
  );
};

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
  price: PropTypes.number,
};

export default ShopCard;
