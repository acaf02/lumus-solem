import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
import Title from "../components/Title";
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className='flex justify-center pt-8'>
        <Title text2="PRODUTOS" />
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={() => navigate(`/product/${product._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
