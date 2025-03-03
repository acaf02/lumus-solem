import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-custom-pink md:pl-38 flex-col sm:grid lg:grid-cols-[2fr_2fr] items-center mt-6 text-sm pb-10 sm:justify-center">
        <div className="my-5 flex flex justify-center sm:justify-start flex-row gap-20">
          <div className="pt-2 pl-10 flex flex-row">
            {" "}
            <Link to="/">
              <img
                src={assets.logo}
                className="w-28 h-auto pt-2"
                alt="about us"
              />
            </Link>
            <p className='w-full md:w-2/3 pl-10 pt-6 md:pt-10 text-white'>
            A Lumus Solem nasceu da paixão por velas artesanais que iluminam e transformam qualquer ambiente.
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:gap-32 gap-28 pt-2">
          {/* Seção Companhia */}
          <div className="flex flex-col items-start gap-2 pt-5">
            <p className="justify-left text-white pt-2 sm:pt-0 font-semibold">
              COMPANHIA
            </p>
            <ul className="flex flex-col gap-2 text-white">
              <a
                href="/about"
                className="hover:ml-3 transform duration-300 text-xs md:text-sm"
              >
                Sobre Nós
              </a>
            </ul>
          </div>

          {/* Seção Entre em Contato */}
          <div className="flex flex-col gap-2 md:w-2/4 items-start pt-5">
            <p className="justify-left text-white pt-2 sm:pt-0 font-semibold">
              ENTRE EM CONTATO
            </p>
            <ul className="flex flex-col gap-2 text-white">
              <a
                href="/contact"
                className="text-xs md:text-sm hover:ml-3 transform duration-300"
              >
                Contate-Nos
              </a>

            </ul>
          </div>
        </div>
      </div>
      <div className="bg-custom-pink text-white">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 - Todos os direitos
        </p>
      </div>
    </div>
  );
};

export default Footer;