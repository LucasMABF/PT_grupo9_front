import CardProfessor from "./components/card_professor";
import Image from "next/image";
import SearchIcon from "/public/media/search_icon.svg";

export default function Home() {
  // adicionar simbolo pesquisa
  return (
    <main className="grow flex flex-col gap-5 py-5 px-0.5">

      <div className="self-end flex bg-white rounded-lg p-1 gap-0 m-1.5 border-[3px] border-green-700 has-[:focus]:border-green-900">
        <Image src={SearchIcon} alt="ícone de pesquisa"/>
        <input type="text" placeholder="Buscar Professor(a) ou matéria" className="w-96 p-1 text-gray-700 outline-0"/>     
      </div>
      <div className="m-1">
        <h2 className="text-3xl">Recentemente avaliados</h2> 

        <section className="flex gap-5 m-2 overflow-x-auto p-1.5">
          {Array.from({length: 15}).map((_, index) => <CardProfessor key={index}/>)}
        </section>
      </div>

      <div className="m-1">
        <h2 className="text-3xl">Todos os professores</h2>
        <section className="flex gap-5 m-2 overflow-x-auto p-1.5">
          {Array.from({length: 15}).map((_, index) => <CardProfessor key={index}/>)}
        </section>
      </div>
    </main>
  );
}
