"use client";
import Image from "next/image";
import { loggedInContext } from "@/providers/loggedIn";
import ModalComentario from "@/components/Modal-comentario";
import Comentario from "@/components/Comentario";
import ModalExcluirComentario from "@/components/Modal-Excluir-comentáio";
import { useState, useContext } from "react";

interface Props {
  nome: string;
  professor: string;
  materia: string;
  conteudo: string;
}
export default function Post(props: Props) {
  const [showButtonComments, setShowButtonComments] = useState(false);
  const { loggedIn } = useContext(loggedInContext);
  const [excluirComentario, setExcluirComentario] = useState(false);
  const [showModalComentario, setShowModalComentario] = useState(false);

  return (
    <>
      {showModalComentario && (
        <ModalComentario onClose={() => setShowModalComentario(false)} />
      )}

      {excluirComentario && (
        <ModalExcluirComentario onClose={() => setExcluirComentario(false)} />
      )}

      {/* botao de voltar */}
      <a href="/perfil">
        <button className="back-button absolute w-12 h-12 rounded-full bg-green-700 flex justify-center items-center m-20 cursor-pointer shadow-lg hover:w-20 transition-all">
          <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-black rotate-[-45deg] hover:border-blue-600"></div>
        </button>
      </a>

      <main className="body  bg-origin-content justify-center items-center w-screen h-screen flex flex-col">
        {/* Comment Box */}
        <div className="bg-color2 border border-black h-full max-w-lg min-w-[30%] mx-auto p-4 overflow-x-auto ">
          <div className="bg-color1 px-10 py-10 rounded-[50px] shadow-lg">
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
                  {props.nome} Joao da Silva
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

            <span className="post-info text-sm text-black">
              <span className="data">23/12/2024</span>, às{" "}
              <span className="hora">21:42</span> -{" "}
              <span className="professor">{props.professor} professor</span> -{" "}
              <span className="disciplina">{props.materia} disciplina</span>
            </span>

            <p className="post-text  my-4  text-gray-800">
              {props.conteudo} espaco para conteudo
            </p>

            <div className="w-full text-black flex justify-between">
              <button
                className="hover:underline cursor-pointer "
                onClick={() => setShowButtonComments(!showButtonComments)}
              >
                {showButtonComments ? "Ocultar comentários" : "2 comentários"}
              </button>

              {/*Implementando função de logado e deslogado */}
              {loggedIn && (
                <div className="flex gap-4">
                  <button onClick={() => setShowModalComentario(true)}>
                    <Image
                      width={20}
                      height={20}
                      src="/icon-editar.png"
                      alt="editar-post"
                      className="cursor-pointer rounded-sm hover:bg-blue-400"
                    ></Image>
                  </button>
                  <button onClick={() => setExcluirComentario(true)}>
                    <Image
                      width={20}
                      height={20}
                      src="/icon-lixeira.png"
                      alt="deletar-post"
                      className="cursor-pointer rounded-sm hover:bg-blue-400"
                    ></Image>
                  </button>
                </div>
              )}
            </div>
          </div>

          {showButtonComments && (
            <>
              <div className="my-3 border border-gray-950  w-30%"></div>
              <Comentario
                nome="nome"
                data="data"
                conteudo="conteudo"
              ></Comentario>

              <Comentario
                nome="nome"
                data="data"
                conteudo="conteudo"
              ></Comentario>
            </>
          )}
        </div>
      </main>
    </>
  );
}
