import React from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from "../assets/assets";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  const location = useLocation();

  // Define frases para cada rota
  const heroTexts = {
    "/": "Bem-vindo à nossa loja de velas aromáticas!",
    "/shop": "Explore nossa coleção exclusiva de velas.",
    "/about": "Conheça nossa história e nossos valores.",
    "/contact": "Entre em contato conosco para mais informações.",
    "/ourCandles" : "Descubra como nossa velas são feitas e mais!",
    "/collection": "Descubra as coleções que fazem parte da Lumus Solem!",
    "/product": "Descubra nossos produtos incríveis!"
  };

  const currentText = heroTexts[location.pathname] || "Descubra nossos produtos incríveis!";

  return (
    <div id="content" className="relative w-full h-screen flex justify-center items-center text-center text-white">
      <div className="hero w-full h-full relative">
        {/* Imagem de fundo */}
        {assets.hero ? (
          <img 
            src={assets.hero}
            alt="Imagem Hero" 
            className="w-full h-full object-cover" 
          />
        ) : (
          <p className="text-gray-500">Imagem não carregada</p>
        )}

        {/* Camada de overlay cobreado cinza */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

        {/* Texto sobreposto */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg flex flex-col items-center">
          <h1 className="text-5xl">{currentText}</h1>
          <FaArrowDownLong className='w-26 h-16 pt-5'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
