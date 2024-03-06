import PropTypes from "prop-types";
import styles from "./ShopCard.module.css";
import defaultimg from "../../../assets/default.jpg";

const ShopCard = ({ title, onAddToCart }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={defaultimg} alt={title} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>Price: ₴</p>
      <button className={styles.cardButton} onClick={onAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ShopCard;
