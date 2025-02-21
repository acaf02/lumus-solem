import React from "react";
import Title from "../components/Title";

const Care = () => {
  return (
    <div>
      <Title text1="NOSSAS" text2="VELAS" />

      <div>
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Sobre as Nossas Velas</b>
            <p className="py-4">
              Nossas Velas são produzidas com essenciais premiuns de alta
              qualidade e com a famosa cera de coco, sendo uma opção vegana e
              sustentável.
            </p>
            <b>Veja alguns beneficios:</b>
            <p className="pb-4">
              Queima limpa e prolongada: vela de cera de coco queimam de forma
              mais lenta e uniforme, durando muito mais tempo
            </p>
            <p className="pb-4">
              Aroma Suave e Natural: Proporciona um ambiente aconchegante e
              acolhedor, sem liberar toxinas.
            </p>
            <p className="pb-4">
              {" "}
              Sustentavel: Produzida de forma ecológica, é biodegradável e não
              agride o meio ambiente.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Dica para uma boa queima</b>
            <p>
              {" "}
              1. Para uma queima uniforme, sempre que acender a vela, deixa a
              cera da superfície derreter até alcançar as bordas do porte
              formando uma piscina de cera líquida completa na superfície, Não
              apague a vela antes disso (1h40 à 2h30 de queima)
            </p>
            <p>
              2. Toda vela tem seu limite de queima. Não deixe queimar mais de 3
              horas.
            </p>
            <p>
              3. Acenda sua vela em superfícies lisas para a queima ser
              uniforme. Utilize a rampa de madeira que a acompanha.
            </p>
            <p>
              4. Sempre que reascender a vela, apare o pavio e o deixe no
              tamanho ideal de 5mm
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1 flex flex-col justify-center rounded-tl-lg rounded-bl-lg bg-custom-yellow px-7 shadow-lg">
          <div className="text-gray-800">
            <b>Reutilizando o Seu Recipiente</b>
            <p className="py-4">
              1. Retire o pavio do pote e descarte corretamente o resto de cera
              que possa ter restado no recipiente
            </p>
            <p> Lave o recipiente</p>

            <b>Sugestões para reutilização do seu recipiente</b>
            <p>Utiliza como decoração de um ambiente</p>
            <p>Guarde pequenos objetos</p>
            <p>Troque seu recipiente por descontos na loja</p>

            <p className="pb-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
