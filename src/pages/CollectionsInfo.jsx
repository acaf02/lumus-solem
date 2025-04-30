import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Hero from "../components/Hero";
import ProductCollection from "../components/ProductCollection";

const Collection = () => {
  const { collectionId } = useParams();
  const { collection } = useContext(ShopContext);
  const [collectionData, setCollectionData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (collection.length > 0) {
      const selectedCollection = collection.find((item) => item._id === collectionId);
      if (selectedCollection) {
        setCollectionData(selectedCollection);
        setImage(selectedCollection.image?.[0] || "/path/to/default-image.jpg");
      }
    }
  }, [collectionId, collection]);

  return collectionData ? (
    <div>
      <Hero />

      <div className="border-t-2 pt-20 max-w-[1440px] mx-auto">
        {/* Dados da Coleção */}
        <div className="flex gap-12 flex-col sm:flex-row px-20">
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto justify-start sm:justify-normal sm:w-[18.7%] w-full">
              {collectionData.image?.length > 0 ? (
                collectionData.image.map((item, index) => (
                  <img
                    key={`image-${index}`}
                    onClick={() => setImage(item)}
                    src={item}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer pr-5"
                    alt={`Imagem da coleção ${index + 1}`}
                  />
                ))
              ) : (
                <p className="text-gray-500">Nenhuma imagem disponível.</p>
              )}
            </div>
            <div className="flex-1">
              <img src={image} alt="Imagem selecionada" className="w-full object-cover rounded-lg shadow" />
            </div>
          </div>

          {/* Informações da Coleção */}
          <div className="flex-1">
            <h2 className="font-medium text-3xl mt-2">{collectionData.name}</h2>
            <div
              className="mt-5 text-gray-500 md:w-4/5"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {collectionData.description}
            </div>
          </div>
        </div>

        {/* Produtos da Coleção */}
        <div className="mt-16">
          <ProductCollection products={collectionData.products} />
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500 mt-10">Carregando...</div>
  );
};

export default Collection;
