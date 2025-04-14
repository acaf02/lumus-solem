import { assets } from "../assets/assets";
import Hero from "../components/Hero";
import Title from "../components/Title";

export default function AboutPage() {
  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="text-center py-16 px-10">
        <Title text1="NOSSAS" text2="VELAS" />
        <p className="text-gray-600 mt-2">
          Saiba mais sobre como nossas velas são feitas, dicas para uma boa
          queima e como reutilizar o seu recipiente.
        </p>
      </section>

      {/* Sections */}
      <div className="px-14 space-y-16 pb-12">
        {/* Seção 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <img
            src={assets.making}
            alt="Sobre as Nossas Velas"
            className="w-full max-w-md mx-auto shadow rounded-full"
          />
          <div className="lg:text-lg">
            <h3 className="text-2xl font-bold">Sobre as Nossas Velas</h3>
            <p className="text-gray-600 mt-4">
              Nossas velas são produzidas com essências premium de alta
              qualidade e com a famosa cera de coco, sendo uma opção vegana e
              sustentável.
            </p>
            <b className="text-gray-600">Veja alguns benefícios:</b>
            <ul className="text-gray-600 mt-4 list-disc list-inside">
              <li>
                <b>Queima limpa e prolongada:</b> velas de cera de coco queimam
                de forma mais lenta e uniforme, durando muito mais tempo.
              </li>
              <li>
                <b>Aroma suave e natural:</b> proporciona um ambiente aconchegante
                e acolhedor, sem liberar toxinas.
              </li>
              <li>
                <b>Sustentável:</b> produzida de forma ecológica, é biodegradável
                e não agride o meio ambiente.
              </li>
            </ul>
          </div>
        </div>

        {/* Seção 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <img
            src={assets.about}
            alt="Dicas para uma boa queima"
            className="w-full max-w-md mx-auto shadow rounded-lg order-1 lg:order-2"
          />
          <div className="lg:text-lg order-2 lg:order-1">
            <h3 className="text-2xl font-bold">Dicas para uma boa queima</h3>
            <ul className="text-gray-600 mt-4 list-disc list-inside">
              <li>
                Para uma queima uniforme, sempre que acender a vela, deixe a cera
                derreter até alcançar as bordas do recipiente.
              </li>
              <li>Não deixe a vela queimar por mais de 3 horas seguidas.</li>
              <li>
                Acenda sua vela em superfícies lisas para garantir uma queima
                uniforme.
              </li>
              <li>
                Sempre que reacender a vela, apare o pavio e o deixe no tamanho
                ideal de 5mm.
              </li>
            </ul>
          </div>
        </div>

        {/* Seção 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <img
            src={assets.ourcandle}
            alt="Reutilizando o seu recipiente"
            className="w-full max-w-md mx-auto shadow rounded-lg"
          />
          <div className="lg:text-lg">
            <h3 className="text-2xl font-bold">Reutilizando o seu recipiente</h3>
            <ul className="text-gray-600 mt-4 list-disc list-inside">
              <li>
                Retire o pavio do pote e descarte corretamente o resto de cera.
              </li>
              <li className="pb-4">Lave o recipiente.</li>
              <b>Sugestões para reutilização do seu recipiente:</b>
              <ul className="list-disc list-inside ml-4 p-2">
                <li>Utilize como decoração para um ambiente.</li>
                <li>Guarde pequenos objetos.</li>
                <li>Troque seu recipiente por descontos na loja.</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
