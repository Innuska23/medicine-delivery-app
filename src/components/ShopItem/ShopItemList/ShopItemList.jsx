import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useShopProductListQuery } from "../../../redux/api/shopProductApi";
import { addOrder } from "../../../redux/reducers/orderReducer";
import ShopCard from "../ShopCard/ShopCard";
import Loader from "../../Loader/Loader";

import s from "./ShopItemList.module.css";

const ShopItemList = ({ selectedShop }) => {
  const dispatch = useDispatch();
  const { data: products, isFetching: shopsItemListLoading } =
    useShopProductListQuery(
      {
        shopId: selectedShop,
      },
      { skip: !selectedShop }
    );

  const handleAddToOrder = (id) => () => {
    const product = products.find(({ _id }) => id === _id);
    if (product) {
      dispatch(addOrder(product));
    }
  };

  return (
    <div>
      {shopsItemListLoading ? (
        <Loader />
      ) : products && products.length > 0 ? (
        products.map((product) => (
          <ShopCard
            key={product._id}
            id={product._id}
            title={product.title}
            imageSrc={product.imgSrc}
            price={product.price}
            onAddToCart={handleAddToOrder(product._id)}
          />
        ))
      ) : (
        <p className={s.shopItemListText}>Medicines will appear soon</p>
      )}
    </div>
  );
};

ShopItemList.propTypes = {
  selectedShop: PropTypes.string.isRequired,
};

export default ShopItemList;
