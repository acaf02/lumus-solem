import React from "react";
import Title from "./Title";

const BestSeller = () => {
  return (
    <section className="py-10">
      <div className="text-center">
      <Title text1="MAIS" text2="VENDIDOS" />
        <p className="text-gray-600 my-4">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="grid grid-cols-3 gap-6 px-10">
        <div className="bg-gray-200 h-40"></div>
        <div className="bg-gray-200 h-40"></div>
        <div className="bg-gray-200 h-40"></div>
      </div>
    </section>
  );
};

export default BestSeller;
