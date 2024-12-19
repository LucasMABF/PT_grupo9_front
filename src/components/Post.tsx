import React from 'react';
import Image from  'next/image'
import ModalComentario from './Modal-comentario';
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext } from 'react';

interface Props {
  id: number,
  nome: string
  professor: string
  materia: string
  conteudo: string
}
const Publicacao = (props: Props) => {
    const {loggedIn} = useContext(loggedInContext);
    const [showModalComentario, setShowModalComentario] = useState(false);
  
    return (
        <>
        {showModalComentario ? (
        <ModalComentario onClose={() => setShowModalComentario(false)}></ModalComentario>
            
        ) : (<div></div>)}
         
          <div className=" text-black post bg-color1 p-4 rounded-lg my-4">
          <div className="post-header flex items-center mb-3">
            <Image width={10} height={10} src="/profile-picture.webp" alt="Avatar" className="post-avatar w-10 h-10 rounded-full mr-3"/>
            <span className="post-info text-sm text-black"> 
              <span className="user-name text-lg">{props.nome}</span> 
              <br/>
            <span className="professor">{props.professor}</span> - <span className="disciplina">{props.materia}</span>
          </span>
          </div>
        <p className="post-text my-4 text-black">
            {props.conteudo}
        </p>
        <div className="flex justify-between post-footer text-sm ">
        <a href="/Post">
          <div className="hover:underline cursor-pointer">2 comentários</div>
        </a>
          
          {/* Acoes de postagem para LOGADO */}
          {loggedIn ? (
            <div className="mx-4 flex">
            <div onClick={() => setShowModalComentario(true)} className="editar-post">
                <Image width={20} height={20} src="/icon-editar.png" alt="editar-post" className="cursor-pointer rounded-sm hover:bg-blue-400"></Image>
            </div>
            <div className="deletar-post mx-4">
                <Image width={20} height={20} src="/icon-lixeira.png" alt="deletar-post" className="cursor-pointer rounded-sm hover:bg-blue-400"></Image>
            </div>
          </div>
          ) : (<div></div>)}
          
        </div>
      </div>
        </>

    )

}

export default Publicacao;