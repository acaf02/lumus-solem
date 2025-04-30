import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import Title from "./Title";

const ProductCollection = ({ products: usedProducts }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  /* Pegar itens que tenham sido usados no projeto */
  useEffect(() => {
    if (products.length > 0 && usedProducts?.length > 0) {
      const filteredProducts = products.filter((item) =>
        usedProducts.includes(item._id)
      );
      setRelated(filteredProducts.slice(0, 10));
    }
  }, [products, usedProducts]);

  return (
    <div className="py-4 px-14">
      <div className="text-center text-3xl py-2 pt-6">
        <Title text1="VELAS" text2="DA COLEÇÃO" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {related.length > 0 ? (
          related.map((item) => (
              <ProductCard product={item} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-5">
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCollection;