import React from 'react'
import { assets } from "../assets/assets";

const Hero = () => {
    return (
      <div id="content" className="relative w-full h-screen flex justify-center items-center">
        <div className="hero w-full h-full">
          {assets.hero ? (
            <img 
              
              alt="Imagem Hero" 
              className="w-scream h-full object-cover" 
            />
          ) : (
            <p className="text-center text-gray-500">Imagem não carregada</p>
          )}
        </div>
      </div>
    );
  };

export default Hero
