import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Hero from "../components/Hero";

const Contact = () => {
  return (
    <div>
      <Hero />
    <div className="flex flex-col py-16 gap-16 md:flex-row items-center justify-center min-h-screen md:px-20 ">
      {/* Texto */}
      <div className="w-fit md:w-1/2 text-center md:text-left">
      <div className="pb-3">
        <Title text1="CONTATE" text2="-NOS" />
      </div>
        <form className="flex flex-col bg-custom-yellow rounded-lg pl-8 py-4">
          <label className="flex flex-col pr-9">
            <span className="pb-1">Nome:</span>
            <input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              value={name}
              className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
            />
          </label>

          <label className="flex flex-col pt-2 pr-9">
            <span className="pb-1">E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="flex flex-col pt-2 pr-9">
            <span className="pb-1">Assunto:</span>
            <input
              type="text"
              name="text"
              placeholder="Digite o assunto"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
            />
          </label>

          <label className="flex flex-col pt-2 pb-5 pr-9">
            <span className="pb-1">Mensagem:</span>
            <textarea
              type="text"
              name="text"
              placeholder="Digite a mensagem"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 border border-gray-300 rounded pl-3 h-28 pt-2 bg-gray-100"
            />
          </label>

          <input type="submit" value="Enviar" className="bg-custom-pink text-lg text-white rounded-lg shadow-md w-37 h-10 hover:bg-red-600 transition" />
        </form>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2 flex pt-4 justify-center mt-8 md:mt-0">
        <img
          src={assets.contact}
          alt="Contact"
          className="w-scream h-scream object-contain"
        />
      </div>
    </div>
    <div className="justify-center md:px-20 pt-10">
      <div className="flex flex-col md:flex-row gap-4 w-full items-center gap-28">
        <div className="bg-custom-yellow rounded-lg p-4 w-80 h-48 flex flex-col items-center text-center pt-7 shadow-md">
          <img src={assets.gmail} className="w-16 h-16" />
          <p className="pt-9">Lumussolemvelas@gmail.com</p>
        </div>
        <div className="bg-custom-yellow rounded-lg w-80 h-48 text-center shadow-md flex flex-col items-center pt-9">
          <img src={assets.whatsapp} className="w-13 h-13"/>
          <p className="pt-9">Telefone: (11) 99999-9999</p>
        </div>
        <div className="bg-custom-yellow rounded-lg p-4 w-80 h-48 text-center shadow-md flex flex-col items-center pt-9">
          <img src={assets.instagram} className="w-13 h-13 " />
          <a href="https://www.instagram.com/lumusvelasartes/">
          <p className="pt-9">@lumusvelasartes</p>
          </a>
          
        </div>
      </div>
      </div>
      </div>
  );
};

export default Contact;
