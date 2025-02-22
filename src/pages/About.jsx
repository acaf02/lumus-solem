import { assets } from "../assets/assets";
import Hero from "../components/Hero";
import MVV from "../components/MVV";
import Title from "../components/Title";

export default function AboutUs() {
  return (
    <div className="min-h-screen">

      <Hero />

      {/* About Section */}
      <section className="text-center py-16 px-10">
      <Title text1="SOBRE" text2="NÓS" />
        <p className="text-gray-600 max-w-xl mx-auto">
          A Lumus Solem nasceu da paixão por velas artesanais que iluminam e transformam qualquer ambiente.
        </p>
      </section>

      {/* Images Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
        <img src={assets.about1} alt="candle" className="rounded-lg md:h-68" />
        <img src={assets.about2} alt="candle" className="rounded-lg md:h-68" />
        <img src={assets.about4} alt="candlegif" className="rounded-lg md:h-68" />
        <img src={assets.about3} alt="candle" className="rounded-lg md:h-68" />
      </div>

      {/* about us section */}
      <section className="pt-16 px-10">
        <h2 className="text-3xl font-bold text-center"> Na Lumus Solem, acreditamos que cada chama carrega consigo um
          toque de aconchego e harmonia. Nossas velas são cuidadosamente
          feitas à mão, combinando cera vegetal de alta qualidade e
          fragrâncias envolventes para proporcionar uma experiência
          sensorial única e sustentável.</h2>
        <p className="text-gray-600 text-center w-2/2 mx-auto mt-4">
          Mais do que iluminar ambientes, nossas criações transformam
          espaços em verdadeiros refúgios de bem-estar, trazendo serenidade,
          conforto e um toque especial à sua rotina. Cada vela é
          desenvolvida com amor e dedicação, refletindo nosso compromisso
          com a qualidade, o design e a sustentabilidade.
        </p>
      </section>

      {/* meaning of the name */}
      <section className="py-16 px-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <img src={assets.lumos} alt="hp" className="rounded-lg lg:w-[45vw] w-full" />
        <div>
          <h3 className="text-2xl font-bold">Significado de Lumus Solem</h3>
          <p className="text-gray-600 mt-4">
            O nome Lumus Solem tem origem na série{" "}<i>Harry Potter</i>, onde a personagem Hermione Granger utiliza o feitiço Lumus Solem em{" "}
            <i>Harry Potter e a Pedra Filosofal</i> para escapar de um perigo em meio à escuridão. Esse feitiço cria um feixe de luz intenso e quente, iluminando o caminho mesmo nas situações mais sombrias. Essa simbologia reflete a essência da nossa marca: trazer luz, aconchego e um toque mágico ao dia a dia das pessoas.
          </p>
          <p className="text-gray-600 mt-4">
            A ideia do nome surge pela forte ligação da empreendedora com a
            série e pela idealização de que as velas produzidas possam
            iluminar cada casa, afastando as sombras e acalentando o ambiente.
          </p>
        </div>
      </section>

      <MVV />
    </div>
  );
}
