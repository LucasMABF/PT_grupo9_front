import React from 'react';
import Image from  'next/image'
import ModalComentario from './Modal-comentario';
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext } from 'react';


const Publicacao = () => {
    const {loggedIn} = useContext(loggedInContext);
    const [showModalComentario, setShowModalComentario] = useState(false);
    const [comentarioAtual, setComentarioAtual] = useState(
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  "
        );

        const handleUpdateComentario = (novoComentario: string) => {
            setComentarioAtual(novoComentario);
            setShowModalComentario(false); // Fecha o modal após salvar
          };

    return (
        <>
        {showModalComentario && (
        <ModalComentario 
            onClose={() => setShowModalComentario(false)}
            initialComment={comentarioAtual} 
            onSave={handleUpdateComentario} //funcao passada como prop
            />
        )}
         
          <div className=" text-black post bg-color1 p-4 rounded-lg my-4">
          <div className="post-header flex items-center mb-3">
            <Image width={10} height={10} src="/profile-picture.webp" alt="Avatar" className="post-avatar w-10 h-10 rounded-full mr-3"/>
            <span className="post-info text-sm text-black"> 
              <span className="user-name text-lg">Joao da Silva</span> 
              <br/>
            <span className="data">23/12/2024</span>, às <span className="hora">21:42</span> - <span className="professor">Dumbledore</span> - <span className="disciplina">Magia Negra</span>
          </span>
          </div>
        <p className="post-text my-4 text-black">
            {comentarioAtual}
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