import { useState } from "react";
import PropTypes from "prop-types";
import ShopItemList from "./ShopItemList/ShopItemList";
import styles from "./ShopComponent.module.css";

const ShopComponent = ({ products }) => {
  const [showShopItemList, setShowShopItemList] = useState(false);

  const shops = ["Drugs 24", "Pharmacy", "", "", ""];

  const handleClickShop = () => {
    setShowShopItemList(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <h2 className={styles.title}>Shops:</h2>
          <ul className={styles.shopList}>
            {shops.map((shop, index) => (
              <li
                key={index}
                className={styles.shopItem}
                onClick={handleClickShop}
              >
                {shop || "(Empty)"}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.rightPanel}>
        {showShopItemList && products && <ShopItemList products={products} />}
      </div>
    </div>
  );
};

ShopComponent.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default ShopComponent;
