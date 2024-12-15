"use client";
import Image from "next/image";

export default function Post() {
  return (
    <>
      <button className="back-button absolute w-12 h-12 rounded-full bg-white flex justify-center items-center m-20 cursor-pointer shadow-lg hover:w-20 transition-all">
        <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-black rotate-[-45deg] hover:border-blue-600"></div>
      </button>

      <main className="body bg-gray-100 justify-center items-center w-screen h-screen flex flex-col">
        {/* botao de voltar */}

        {/* Comment Box */}
        <div className="bg-white border border-x-1 border-black h-full max-w-full mx-auto py-4 px-4">
          <div className="bg-blue-300 px-10 py-10 rounded-[50px] shadow-lg">
            <div className="border-b-2 border-black w-full">
              <div className="flex items-center ">
                <Image
                  width={40}
                  height={40}
                  src="/profile-picture.webp"
                  alt="Avatar"
                  className="post-avatar w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="user-name text-lg font-bold text-gray-900">
                    Jacinto Pinto
                  </span>
                  <span className="estrelas text-lg ml-3">
                    <span className="estrela1 m-0.5 text-yellow-500">
                      &#9733;
                    </span>
                    <span className="estrela2 m-0.5 text-yellow-500">
                      &#9733;
                    </span>
                    <span className="estrela3 m-0.5 text-yellow-500">
                      &#9733;
                    </span>
                    <span className="estrela4 m-0.5">&#9733;</span>
                    <span className="estrela5 m-0.5">&#9733;</span>
                  </span>
                </div>
              </div>

              <span className="post-info text-sm text-gray-500">
                <span className="data">23/12/2024</span>, às{" "}
                <span className="hora">21:42</span> -{" "}
                <span className="professor">Dumbledore</span> -{" "}
                <span className="disciplina">Magia Negra</span>
              </span>

              <p className="post-text my-4 text-gray-800">
                Adorei esse professor, ele deixa fazer a prova em grupo e também
              </p>
              <div className="w-full flex justify-between items-center">
                <button>2 comentários</button>
                <div className="flex gap-4">
                  <button>Editar</button>
                  <button>Excluir</button>
                </div>
              </div>
            </div>

            {/*Comentário dos outros usuário */}
            <div>
              <div className="flex my-4 items-center">
                <Image
                  width={40}
                  height={40}
                  src="/Perfil_secundario.jpg"
                  alt="Avatar"
                  className="post-avatar w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="user-name font-bold text-gray-900">
                    Baby Dinossauro
                  </span>
                  <span className="text-sm ml-3 text-gray-500">
                    <span className="data ">25/01/2025</span>, ás{" "}
                    <span className="hora ">00:00</span>
                  </span>
                </div>
              </div>

              <p className="post-text my-2 pl-10 text-gray-800">
                Valeu pela dica
              </p>

              {/*Comentário de outro usuário */}
              <div className="border-t border-black my-4"></div>
              <div className="flex my-4 items-center">
                <Image
                  width={40}
                  height={40}
                  src="/Perfil_secundario.jpg"
                  alt="Avatar"
                  className="post-avatar w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="user-name font-bold text-gray-900">
                    Baby Dinossauro
                  </span>
                  <span className="text-sm ml-3 text-gray-500">
                    <span className="data ">25/01/2025</span>, ás{" "}
                    <span className="hora ">00:00</span>
                  </span>
                </div>
              </div>

              <p className="post-text my-2 pl-10 text-gray-800">
                Semestre que vem tentarei pegar matéria com esse professor
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
