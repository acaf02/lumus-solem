import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const OurCandles = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]">
      <Title text1="NOSSAS" text2="VELAS" />

      <div className="flex flex-row rounded shadow-lg">
        <img src={assets.making} className="w-1/3 h-1/3 rounded-bl-lg rounded-tl-lg bg-custom-yellow" alt="Fabricação das velas" />
        <div className="flex-1 flex flex-col justify-center rounded-tr-lg rounded-br-lg bg-custom-yellow px-7 ">
          <div className="text-gray-800">
            <b>Sobre as Nossas Velas</b>
            <p className="py-4">
              Nossas velas são produzidas com essências premium de alta
              qualidade e com a famosa cera de coco, sendo uma opção vegana e
              sustentável.
            </p>
            <b>Veja alguns benefícios:</b>
            <p className="pb-4">
              <b>Queima limpa e prolongada:</b> velas de cera de coco queimam de forma
              mais lenta e uniforme, durando muito mais tempo.
            </p>
            <p className="pb-4">
              <b>Aroma suave e natural:</b> proporciona um ambiente aconchegante e
              acolhedor, sem liberar toxinas.
            </p>
            <p className="pb-4">
              <b>Sustentável:</b> produzida de forma ecológica, é biodegradável e não
              agride o meio ambiente.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row py-6">
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Dicas para uma boa queima</b>
            <p>
              1. Para uma queima uniforme, sempre que acender a vela, deixe a
              cera da superfície derreter até alcançar as bordas do recipiente,
              formando uma piscina de cera líquida completa. Não apague a vela
              antes disso (1h40 a 2h30 de queima).
            </p>
            <p>
              2. Toda vela tem seu limite de queima. Não deixe queimar por mais
              de 3 horas seguidas.
            </p>
            <p>
              3. Acenda sua vela em superfícies lisas para garantir uma queima
              uniforme. Utilize a rampa de madeira que a acompanha.
            </p>
            <p>
              4. Sempre que reacender a vela, apare o pavio e o deixe no tamanho
              ideal de 5mm.
            </p>
          </div>
        </div>
        <img src={assets.tips} className="w-[40vw] h-full rounded-br-lg rounded-tr-lg shadow-lg border-t border-b border-r" alt="Dicas de queima" />
      </div>

      <div className="flex flex-row py-6">
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Reutilizando o seu recipiente</b>
            <p className="py-4">
              1. Retire o pavio do pote e descarte corretamente o resto de cera
              que possa ter ficado no recipiente.
            </p>
            <p>2. Lave o recipiente.</p>

            <b>Sugestões para reutilização do seu recipiente:</b>
            <p>- Utilize como decoração para um ambiente.</p>
            <p>- Guarde pequenos objetos.</p>
            <p>- Troque seu recipiente por descontos na loja.</p>
          </div>
        </div>
        <img src={assets.youknow} className="w-1/3 h-1/3 rounded-br-lg rounded-tr-lg shadow-lg" alt="Reutilização do recipiente" />
      </div>
    </div>
  );
};

export default OurCandles;
