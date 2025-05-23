import React, { useRef } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Hero from "../components/Hero";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Erro ao enviar mensagem. Tente novamente.");
        }
      );
  }
  return (
    <div>
      <Hero />
      <div className="flex flex-col py-10 gap-12 md:flex-row items-center justify-center min-h-screen">
        {/* Texto */}
        <div className="text-left px-4 md:pl-24">
          <div className="pb-3">
            <Title text1="CONTATE" text2="-NOS" />
          </div>

          <form
            className="flex flex-col rounded-lg bg-custom-yellow px-5 py-5"
            ref={form}
            onSubmit={sendEmail}
          >

            <label className="flex flex-col">
              Nome:
              <input
                type="text"
                name="user_name"
                placeholder="Digite o seu nome"
                className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
                required
              />
            </label>

            <label className="flex flex-col pt-2">
              Email:
              <input
                type="email"
                name="user_email"
                placeholder="Digite o seu email"
                className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
                required
              />
            </label>

            <label className="flex flex-col pt-2">
              Assunto:
              <input
                type="text"
                name="title"
                placeholder="Digite o seu assunto"
                className="w-full h-12 border border-gray-300 rounded pl-3 bg-gray-100"
                required
              />
            </label>

            <label className="flex flex-col pt-2">
              Mensagem:
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded pl-3 h-28 pt-2 bg-gray-100"
                placeholder="Digite a mensagem"
                required
              />
            </label>

            <div className="pt-5 text-center">
              <input
                type="submit"
                value="Enviar"
                className="bg-custom-pink text-lg cursor-pointer text-white rounded-lg shadow-md h-10 w-1/2 hover:bg-gray-600 transition"
              />
            </div>
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
      <div className="justify-center md:px-20 pt-10 pb-10">
        <div className="flex flex-col md:flex-row gap-4 w-full items-center gap-28">
          <div className="bg-custom-yellow rounded-lg p-4 w-80 h-48 flex flex-col items-center text-center pt-7 shadow-md">
            <img src={assets.gmail} className="w-16 h-16" />
            <p className="pt-9">Lumussolemvelas@gmail.com</p>
          </div>
          <div className="bg-custom-yellow rounded-lg w-80 h-48 text-center shadow-md flex flex-col items-center pt-9">
            <img src={assets.whatsapp} className="w-13 h-13" />
            <p className="pt-9">Telefone: (53) 984697659</p>
          </div>
          <div className="bg-custom-yellow rounded-lg p-4 w-80 h-48 text-center shadow-md flex flex-col items-center pt-9">
            <img src={assets.instagram} className="w-13 h-13" />
            <a href="https://www.instagram.com/lumusvelasartes/">
              <p className="pt-9 text-black no-underline">@lumusvelasartes</p>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;