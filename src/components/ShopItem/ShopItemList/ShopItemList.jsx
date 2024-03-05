import PropTypes from "prop-types";
import ShopCard from "../ShopCard/ShopCard";
import styles from "./ShopItemList.module.css";

const ShopItemList = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ShopCard
          key={product.id}
          title={product.title}
          onAddToCart={() => console.log(`Added ${product.title} to cart`)}
        />
      ))}
      <div className={styles.note}>
        The item should be added to the Shopping Cart
      </div>
    </div>
  );
};

ShopItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ShopItemList;
