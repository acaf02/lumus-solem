import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Hero from "../components/Hero";

const ProductInfo = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image?.[0] || "path/to/default-image.jpg");
    }
  }, [productId, products]);

  return productData ? (
    <div>
      <Hero />
      <div className="border-t-2 px-16 py-26">
        <div className="flex gap-12 flex-col sm:flex-row">
          <div className="flex-1">
            <img
              src={image}
              alt="Imagem principal do produto"
              className="w-full h-auto object-contain"
            />
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {productData.image?.map((item, index) => (
                <img
                  key={`image-${index}`}
                  onClick={() => setImage(item)}
                  src={item}
                  className="w-24 h-24 object-cover cursor-pointer border"
                  alt={`Imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <h2 className="font-medium text-l mt-2">
              Código: {productData.codigo}
            </h2>
            <div
              className="mt-5 text-gray-500 md:w-4/5"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {productData.about}
            </div>
            <div
              className="mt-5 text-gray-500 md:w-4/5"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {productData.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0">Carregando...</div>
  );
};

export default ProductInfo;
