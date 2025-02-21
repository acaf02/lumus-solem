import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import MVV from "../components/MVV";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="my-10 flex flex-col text-justify">
      {/* Título */}
      <div className="flex justify-center pb-5">
        <Title text1="SOBRE" text2="NÓS" />
      </div>

      <div className="flex flex-row py-6">
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Bem-vindo à Lumus Solem!</b>
            <p className="py-4">
              Lumus Solem foi primeiramente visto (e usado) em{" "}
              <i>Harry Potter e a Pedra Filosofal</i>, pela personagem Hermione
              Granger para escapar de um perigo em uma grande escuridão. O
              feitiço em si é usado para criar um feixe de luz muito brilhante,
              que pode ser mais quente que a luz comum.
            </p>
            <p className="pb-4">
              A ideia do nome surge pela forte ligação da empreendedora com a
              série e pela idealização de que as velas produzidas possam
              iluminar cada casa, afastando as sombras e acalentando o ambiente.
            </p>
          </div>
        </div>
        <img src={assets.lumos} className="w-1/2 h-1/2 rounded-tr-lg rounded-br-lg" />
      </div>
      <div className="flex flex-row">
        {/* Imagem */}
        <div className="relative flex-1">
          <img
            className="w-[580px] h-[460px] object-cover rounded-bl-lg rounded-tl-lg shadow-lg"
            src={assets.about}
            alt="Sobre nós"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 flex flex-col text-lg justify-center rounded-br-lg rounded-tr-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <p className="pb-4">
              Na Lumus Solem, acreditamos que cada chama carrega consigo um
              toque de aconchego e harmonia. Nossas velas são cuidadosamente
              feitas à mão, combinando cera vegetal de alta qualidade e
              fragrâncias envolventes para proporcionar uma experiência
              sensorial única e sustentável.
            </p>
            <p className="pb-4">
              Mais do que iluminar ambientes, nossas criações transformam
              espaços em verdadeiros refúgios de bem-estar, trazendo serenidade,
              conforto e um toque especial à sua rotina. Cada vela é
              desenvolvida com amor e dedicação, refletindo nosso compromisso
              com a qualidade, o design e a sustentabilidade.
            </p>
            <p>
              Descubra a magia das velas Lumus Solem e permita-se viver momentos
              de pura tranquilidade.
            </p>
          </div>

          {/* Botão de contato */}
          <Link className="cursor-pointer" to="/contact">
            <div className="flex flex-row items-center text-gray-800 pt-4">
              <b className="text-sm">ENTRE EM CONTATO</b>
              <MdArrowRightAlt className="w-8 h-5 ml-2" />
            </div>
          </Link>
        </div>
      </div>

      {/* Seção de Missão, Visão e Valores */}
      <MVV />
    </div>
  );
};

export default About;
