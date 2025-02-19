import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const MVV = () => {
  const data = [
    {
      title: "MISSÃO",
      text: "Proporcionar momentos de bem-estar e aconchego por meio de velas aromáticas de alta qualidade, feitas com ingredientes naturais e fragrâncias envolventes, promovendo relaxamento e equilíbrio no dia a dia.",
      icon: assets.mission,
    },
    {
      title: "VISÃO",
      text: "Ser referência no mercado de velas aromáticas, reconhecida pela sustentabilidade, inovação e compromisso com o bem-estar dos clientes, transformando ambientes e experiências sensoriais.",
      icon: assets.vision,
    },
    {
      title: "VALORES",
      text: ["Qualidade", "Sustentabilidade", "Bem-estar", "Inovação", "Compromisso"],
      icon: assets.value,
    },
  ];

  return (
    <div className="py-16">
      {/* Título */}
      <div className="flex justify-center mb-12">
        <Title text1="MISSÃO, VISÃO" text2="E VALORES" />
      </div>

      {/* Seção de cartões */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-16">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white px-8 pb-8 pt-3 w-80 text-center rounded-2xl shadow-lg border-t-8 border-custom-pink"
            >
              <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-gray-300">
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-custom-pink mt-12">{item.title}</h2>
              {Array.isArray(item.text) ? (
                <ul className="text-gray-600 mt-4 text-base text-left list-disc list-inside">
                  {item.text.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mt-4 text-base">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MVV;
