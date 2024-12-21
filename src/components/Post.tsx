import React from "react";
import Image from "next/image";
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext } from "react";
import ModalExcluirComentario from "./Modal-Excluir-comentáio";
import ModalEditarAvaliacao from "./Modal-editar-avaliacao";
import { Avaliacao } from "@/types/Avaliacao";
interface Props {

  id: number,
  nome: string
  professor: string
  materia: string
  conteudo: string
}
const Publicacao = (props: Props) => {

    const {loggedIn} = useContext(loggedInContext);
    const [showModalEditarAvaliacao, setShowModalEditarAvaliacao] = useState(false);
    const [excluirComentario, setExcluirComentario] = useState(false);

    const [avaliacao, setAvaliacao] = useState({
      nome: "",
      materia: "",
      professor: "",
      data: "",
      conteudo: "",
      userId: 0,
      disciplina: "",
      professorId: 0,
    });

    return (
        <>
        {showModalEditarAvaliacao && (
      <ModalEditarAvaliacao 
        onClose={() => setShowModalEditarAvaliacao(false)} 
        avaliacao={avaliacao}
        onUpdate={(updatedAvaliacao: Avaliacao) =>
          setAvaliacao((prev => ({ ...prev, ...updatedAvaliacao })))
        } 
      ></ModalEditarAvaliacao>
    )}
    
         

      {excluirComentario && (
        <ModalExcluirComentario onClose={() => setExcluirComentario(false)} />
      )}

      <div className=" text-black post bg-color1 p-4 rounded-lg my-4">
        <div className="post-header flex items-center mb-3">
          <Image
            width={10}
            height={10}
            src="/profile-picture.webp"
            alt="Avatar"
            className="post-avatar w-10 h-10 rounded-full mr-3"
          />
          <span className="post-info text-sm text-black">
            <span className="user-name text-lg">{props.nome}</span>
            <br />
            <span className="professor">{props.professor}</span> -{" "}
            <span className="disciplina">{props.materia}</span>
          </span>
        </div>
        <p className="post-text my-4 text-black">{props.conteudo}</p>
        <div className="flex justify-between post-footer text-sm ">
          <a href="/Post">
            <div className="hover:underline cursor-pointer">Comentários</div>
          </a>

          {/* Acoes de postagem para LOGADO */}
          {loggedIn ? (
            <div className="mx-4 flex">
              <div
                onClick={() => setShowModalEditarAvaliacao(true)}
                className="editar-post"
              >
                <Image
                  width={20}
                  height={20}
                  src="/icon-editar.png"
                  alt="editar-post"
                  className="cursor-pointer rounded-sm hover:bg-blue-400"
                ></Image>
              </div>
              <div className="deletar-post mx-4">
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
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Publicacao;
