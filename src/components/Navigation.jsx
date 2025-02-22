import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "../assets/assets";

const Navigation = () => {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(235, 76, 106)"]
  );

  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.nav
      id="navigation"
      style={{
        background,
        height,
      }}
      className="fixed top-0 left-0 w-full flex items-center px-8 transition-all duration-300 z-1"
    >
      {/* Logo */}
      <div id="logo">
        <img src={assets.logo}  className="w-12 h-12"/>
      </div>

      {/* Menu */}
      <ul className="flex ml-auto space-x-6">
        <a href="/">
          <li className="text-white cursor-pointer">Home</li>
        </a>
        <a href="/product">
          <li className="text-white cursor-pointer">Produtos</li>
        </a>
        <a href="/collection">
          <li className="text-white cursor-pointer">Coleções</li>
        </a>
        <a href="/ourCandles">
          <li className="text-white cursor-pointer">Nossas Velas</li>
        </a>
        <a href="/about">
          <li className="text-white cursor-pointer">
            Sobre
          </li>
        </a>
        <a href="/contact">
          <li className="text-white cursor-pointer">
            Contato
          </li>
        </a>
      </ul>
    </motion.nav>
  );
};

export default Navigation;
