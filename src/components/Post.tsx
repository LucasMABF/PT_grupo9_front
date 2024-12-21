import React from "react";
import Image from "next/image";
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext } from "react";
import ModalConfirmarExcluir from "./ModalConfirmarExcluir";
import { Comentario } from "@/types/Comentario";
import { Avaliacao } from "@/types/Avaliacao";
import { deleteAvaliacao } from "@/utils/api";
import ModalEditarAvaliacao from "./Modal-editar-avaliacao";
import Link from "next/link";

const Publicacao = (props: {avaliacao: Avaliacao}) => {

    const {loggedIn} = useContext(loggedInContext);
    const [showModalEditarAvaliacao, setShowModalEditarAvaliacao] = useState(false);
    const [excluirComentario, setExcluirComentario] = useState(false);


    return (
        <>
        {showModalEditarAvaliacao && (
      <ModalEditarAvaliacao 
        onClose={() => setShowModalEditarAvaliacao(false)} 
        avaliacao={props.avaliacao}
      ></ModalEditarAvaliacao>
    )}
    
         

      {excluirComentario && (
        <ModalConfirmarExcluir onClose={() => setExcluirComentario(false)} onConfirm={() => {deleteAvaliacao(props.avaliacao.id)}} />
      )}

      <div className=" text-black post bg-color1 p-4 rounded-lg my-4">
        <div className="post-header flex items-center mb-3">
          <Image
            width={10}
            height={10}
            src="/media/profile_pic.svg"
            alt="Avatar"
            className="post-avatar w-10 h-10 rounded-full mr-3"
          />
          <span className="post-info text-sm text-black">
            <span className="user-name text-lg">{props.avaliacao.user.nome}</span>
            <br />
            <span className="professor">{props.avaliacao.professor.nome}</span> -{" "}
            <span className="disciplina">{props.avaliacao.disciplina.nome}</span>
          </span>
        </div>
        <p className="post-text my-4 text-black">{props.avaliacao.conteudo}</p>
        <div className="flex justify-between post-footer text-sm ">
          <Link href="/Post">
            <div className="hover:underline cursor-pointer">2 comentários</div>
          </Link>

          {/* Acoes de postagem para LOGADO */}
          {loggedIn && (loggedIn == props.avaliacao.user.id) ? (
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
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Publicacao;
