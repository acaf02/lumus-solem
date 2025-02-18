import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 ">
      {/* Texto */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">CONTATE-NOS</h2>
        <form className="flex flex-col">
          <div>
            <label className="flex flex-col">
              <span className="pb-1">Nome:</span>
              <input
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                value={name}
                className="w-4/5 h-12 border border-gray-300 rounded pl-3"
              />
            </label>
          </div>
         
          <label className="flex flex-col pt-2">
            <span className="pb-1">E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              className="w-4/5 h-12 border border-gray-300 rounded pl-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col pt-2">
            <span className="pb-1">Assunto</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-4/5 h-12 border border-gray-300 rounded pl-3"
            />
          </label>
          <label className="flex flex-col pt-2 pb-5">
            <span className="pb-1">Mensagem</span>
            <textarea
              type="email"
              name="email"
              placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
             className="w-4/5 h-12 border border-gray-300 rounded pl-3 h-28 pt-2"
            />
          </label>
          <input type="submit" value="Enviar" className="bg-custom-pink text-lg text-white px-6  rounded-lg shadow-md w-37 h-10 hover:bg-red-600 transition"/>
        </form>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={assets.contact}
          alt="Contact"
          className="w-scream h-scream object-contain"
        />
      </div>
    </div>
  );
};

export default Contact;
