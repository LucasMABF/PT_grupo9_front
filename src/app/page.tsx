import CardProfessor from "./components/card_professor"

export default function Home() {
  // adicionar simbolo pesquisa
  return (
    <main className="grow flex flex-col gap-5 py-5 px-0.5">
      <input type="text" placeholder="🔎 Buscar Professor(a) ou matéria" className="rounded-lg self-end mx-5 w-96 p-1 border-2 border-green-800 text-gray-700 focus:ring-3 focus:ring-blue-500"/>     
      <div>
        <h2 className="text-3xl">Recentemente avaliados</h2> 

        <section className="flex gap-5 m-2 overflow-x-auto p-1.5">
          {Array.from({length: 15}).map((_, index) => <CardProfessor />)}
        </section>
      </div>

      <div>
        <h2 className="text-3xl">Todos os professores</h2>
        <section className="flex gap-5 m-2 overflow-x-auto p-1.5">
          {Array.from({length: 15}).map((_, index) => <CardProfessor />)}
        </section>
      </div>

    </main>
  );
}
