import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10));
  }, [products]);

  return (
    <section className="py-10">
      <div className="text-center">
        <Title text1="MAIS" text2="VENDIDOS" />
        <p className="text-gray-600 my-4">Conheça os produtos mais vendidos.</p>
      </div>

      <div style={{ margin: "0 auto", maxWidth: "93%", maxHeight: "70%" }}>
        <Carousel
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {bestSeller.map((item) => (
            <div key={item._id} className="carousel-item px-4 max-w-full">
              <ProductCard product={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BestSeller;
