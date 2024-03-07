import { useState } from "react";

import { useShopListQuery } from "../../redux/api/shopApi";
import ShopItemList from "./ShopItemList/ShopItemList";
import styles from "./ShopComponent.module.css";

import Loader from "../../components/Loader/Loader";

const ShopComponent = () => {
  const [selectedShopIndex, setSelectedShopIndex] = useState(null);
  const { data: shops, isLoading: shopsLoading } = useShopListQuery();

  const handleClickShop = (index) => {
    setSelectedShopIndex(index);
  };

  return (
    <div className={styles.shopComponentWrapper}>
      <div className={styles.shopComponentContainer}>
        <div className={styles.shopComponentLeftPanel}>
          <h2 className={styles.shopComponentTitle}>Shops:</h2>
          {shopsLoading ? (
            <Loader />
          ) : (
            <ul className={styles.shopComponentShopList}>
              {shops?.map((shop) => (
                <li
                  key={shop?._id}
                  className={`${styles.shopComponentShopItem} ${
                    selectedShopIndex === shop?._id ? styles.active : ""
                  }`}
                  onClick={() => handleClickShop(shop?._id)}
                >
                  {shop?.title || "(Empty)"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.shopComponentRightPanel}>
        {selectedShopIndex && <ShopItemList selectedShop={selectedShopIndex} />}
      </div>
    </div>
  );
};

export default ShopComponent;
