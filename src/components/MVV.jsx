import React from "react";
import { assets } from "../assets/assets";

const MVV = () => {
  const data = [
    {
      title: "MISSÃO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy.",
      icon: assets.mission,
    },
    {
      title: "VISÃO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy.",
      icon: assets.vision,
    },
    {
      title: "VALORES",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy.",
      icon: assets.value,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex gap-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white pl-8 pr-8 pb-8 pt-3 w-80 text-center rounded-2xl shadow-lg border-t-8 border-custom-pink"
          >
            <div
              className={`w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-${item.color}`}
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <h2 className={`text-2xl font-bold text-custom-pink mt-10`}>{item.title}</h2>
            <p className="text-gray-600 mt-4 text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MVV;
