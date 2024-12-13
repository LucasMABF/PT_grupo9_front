import React from 'react';
import Image from  'next/image'
import ModalComentario from '../components/Modal-comentario';
import { useState } from 'react';

const Publicacao = () => {

    const [showModalComentario, setShowModalComentario] = useState(false);
    const [comentarioAtual, setComentarioAtual] = useState(
        "Adorei esse professor blab ablab lab alb al bal balb "
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
         <div className="post bg-blue-300 p-4 rounded-lg my-4">
          <div className="post-header flex items-center mb-3">
            <Image width={10} height={10} src="/profile-picture.webp" alt="Avatar" className="post-avatar w-10 h-10 rounded-full mr-3"/>
            <span className="post-info text-sm text-gray-500"> 
              <span className="user-name text-lg">Joao da Silva</span> 
              <br/>
            <span className="data">23/12/2024</span>, às <span className="hora">21:42</span> - <span className="professor">Dumbledore</span> - <span className="disciplina">Magia Negra</span>
          </span>
          </div>
        <p className="post-text my-4 text-gray-800">
            {comentarioAtual}
        </p>
        <div className="flex justify-between post-footer text-sm ">
          <div className="hover:underline cursor-pointer">2 comentários</div>
          <div className="mx-4 flex">
            <div onClick={() => setShowModalComentario(true)} className="editar-post">
                <Image width={20} height={20} src="/icon-editar.png" alt="editar-post" className="cursor-pointer rounded-sm hover:bg-blue-400"></Image>
            </div>
            <div className="deletar-post mx-4">
                <Image width={20} height={20} src="/icon-lixeira.png" alt="deletar-post" className="cursor-pointer rounded-sm hover:bg-blue-400"></Image>
            </div>
          </div>
        </div>
      </div>
        </>

    )

}

export default Publicacao;