import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Hero from '../components/Hero';

const Collection = () => {
  const { collection } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (!collection.length) return;
    setFilterProducts(collection);
  }, [collection]);

  return (
    <div>
      <Hero />
      <div className="flex flex-col px-20 py-14 lg:flex-row gap-1 lg:gap-10 border-t">
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="TODAS AS" text2="COLEÇÕES" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-4 gap-y-6">
            {filterProducts.length > 0 ? (
              filterProducts.map((item) => (
                <a
                  key={item._id}
                  href={`/collection/${item._id}`}
                  className="group relative flex flex-col bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={item.image || "/default-image.jpg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-slate-900 transition">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <div className="mt-4">
                      <span className="inline-block text-sm font-medium text-slate-700 border px-3 py-1 rounded hover:bg-slate-100 transition">
                        Ver coleção →
                      </span>
                    </div>
                  </div>
                </a>

              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                Nenhuma coleção encontrada.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
