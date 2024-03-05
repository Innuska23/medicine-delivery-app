import { useState, useEffect } from "react";
import ShopComponent from "../../components/ShopItem/ShopComponent";

const StorePage = () => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = [
          { id: 1, title: "Paracetamol" },
          { id: 2, title: "Paracetamol" },
          { id: 3, title: "Paracetamol" },
          { id: 4, title: "Paracetamol" },
        ];
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ShopComponent onAddToCart={handleAddToCart} products={products} />
    </div>
  );
};

export default StorePage;
