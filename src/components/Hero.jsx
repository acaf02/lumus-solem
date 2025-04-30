import React from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from "../assets/assets";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  const location = useLocation();

  // Função para retornar a frase correta com base no pathname
  const getHeroText = (pathname) => {
    if (pathname === "/") return "Bem-vindo à nossa loja de velas aromáticas!";
    if (pathname === "/shop") return "Explore nossa coleção exclusiva de velas.";
    if (pathname === "/about") return "Conheça nossa história e nossos valores.";
    if (pathname === "/contact") return "Entre em contato conosco para mais informações.";
    if (pathname === "/ourCandles") return "Descubra como nossas velas são feitas e mais!";
    if (pathname === "/collection") return "Descubra as coleções que fazem parte da Lumus Solem!";
    if (pathname.startsWith("/product/")) return "Saiba mais sobre esse produto!";
    if (pathname === "/product") return "Descubra nossos produtos incríveis!";
    if (pathname.startsWith("/collection/")) return "Saiba mais sobre essa coleção!";
    return "Descubra nossos produtos incríveis!";
  };

  const currentText = getHeroText(location.pathname);

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
