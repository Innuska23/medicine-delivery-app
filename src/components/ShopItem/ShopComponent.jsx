import { useState } from "react";
import PropTypes from "prop-types";
import ShopItemList from "./ShopItemList/ShopItemList";
import styles from "./ShopComponent.module.css";

const ShopComponent = ({ products }) => {
  const [selectedShopIndex, setSelectedShopIndex] = useState(null); // Створюємо стейт для зберігання індексу обраного магазину

  const shops = ["Drugs 24", "Pharmacy", "", "", ""];

  const handleClickShop = (index) => {
    setSelectedShopIndex(index);
  };

  return (
    <div className={styles.shopComponentWrapper}>
      <div className={styles.shopComponentContainer}>
        <div className={styles.shopComponentLeftPanel}>
          <h2 className={styles.shopComponentTitle}>Shops:</h2>
          <ul className={styles.shopComponentShopList}>
            {shops.map((shop, index) => (
              <li
                key={index}
                className={`${styles.shopComponentShopItem} ${
                  selectedShopIndex === index ? styles.active : ""
                }`}
                onClick={() => handleClickShop(index)}
              >
                {shop || "(Empty)"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.shopComponentRightPanel}>
        {selectedShopIndex !== null && products.length > 0 && (
          <ShopItemList products={products} />
        )}
      </div>
    </div>
  );
};

ShopComponent.propTypes = {
  products: PropTypes.array,
};

export default ShopComponent;
