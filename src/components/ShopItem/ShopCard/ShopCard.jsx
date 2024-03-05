import PropTypes from "prop-types";
import styles from "./ShopCard.module.css";

const ShopCard = ({ title, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.button} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ShopCard;
