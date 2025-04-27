import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestProduct = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  // Procurar os últimos produtos adicionados
  useEffect(() => {
    if (products && products.length) {
      setLatestProducts([...products].reverse().slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl">
        <Title text1={"ÚLTIMOS"} text2={"LANÇAMENTOS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Confira as últimas novidades com alta qualidade.
        </p>
      </div>

      {/* Renderizar produtos */}
      <div style={{ margin: "0 auto", maxWidth: "93%", maxHeight: "70%" }}>
        <Carousel
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {LatestProducts.map((item) => (
            <div key={item._id} className="carousel-item px-4 pt-6 pb-4 max-w-full">
              {/* Certifique-se de passar a propriedade 'product' corretamente */}
              <ProductCard product={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestProduct;
