import CardProfessor from "./components/card_professor";
import DropDown from "./components/dropdown"
import Image from "next/image";
import SearchIcon from "/public/media/search_icon.svg";

export default function Home() {
  return (
    <main className="grow flex flex-col gap-5 py-5 px-0.5 relative">

      <div className="absolute top-1.5 right-1.5 self-end flex w-1/3 max-w-96 bg-white rounded-lg p-1 gap-0 m-1.5 border-[3px] border-green-700 has-[:focus]:border-green-900">
        <Image src={SearchIcon} alt="ícone de pesquisa"/>
        <input type="text" placeholder="Buscar Professor(a) ou matéria" className="w-full  p-1 text-gray-700 outline-0"/>     
      </div>
      <div className="m-1">
        <h2 className="md:text-3xl text-2xl">Recentemente avaliados</h2> 

        <section className="flex gap-5 m-2 overflow-x-scroll p-1.5">
          {Array.from({length: 15}).map((_, index) => <CardProfessor key={index} materia="matéria" nome="Nome"/>)}
        </section>
      </div>
      <div className="m-1">
        <div className="flex justify-between">
          <h2 className="md:text-3xl text-2xl">Todos os professores</h2>
          <DropDown options={["Nome", "Matéria", "Departamento", "Recentes", "Antigos"]}/>
        </div>
        <section className="flex gap-5 m-2 flex-wrap  p-1.5 justify-center">
          {Array.from({length: 21}).map((_, index) => <CardProfessor key={index} materia="matéria" nome="Nome"/>)}
        </section>
      </div>
    </main>
  );
}
