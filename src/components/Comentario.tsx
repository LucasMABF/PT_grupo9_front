{/* COMPONENTE DE COMENTARIO */}
import React from 'react';
import Image from 'next/image'

interface Props {
    nome: string
    conteudo: string
    data: string
}

const ComponentComentario = (props: Props) => {

    return (
        <>
        <div className="bg-color1 my-6 mx-5 py-6 rounded-[50px] shadow-lg">
        <div className="header-do-comentario flex px-4 items-center">
          <Image
            width={40}
            height={40}
            src="/Perfil_secundario.jpg"
            alt="Avatar"
            className="post-avatar w-10 h-10 rounded-full mr-3"
          />
          <div >
            <span className="user-name font-bold text-gray-900">
              {props.nome}
            </span>
            <span className="text-sm ml-3 text-black">
              <span className="data ">{props.data}</span>
            </span>
          </div>
        </div>

        <p className="post-text my-3 pl-10 text-gray-800">
          {props.conteudo}
        </p>
        <div className="footer-do-comentario flex justify-between text-black w-full h-9">
          <div></div>
          <div className="m-6 px-4 acoes-de-comentario">
            <button className="editar-comentario">
              <Image 
                width={20} 
                height={20} 
                alt="editar-comentario" 
                src="/icon-editar.png"
                className="cursor-pointer rounded-sm hover:bg-blue-400">
                </Image>
            </button>
            <button className="mx-4 excluir-comentario">
              <Image 
                width={20} 
                height={20} 
                alt="excluir-comentario" 
                src="/icon-lixeira.png"
                className="cursor-pointer rounded-sm hover:bg-blue-400">
              </Image>
            </button>
            </div>
      
        </div>
      </div>


        </>
    )



}

export default ComponentComentario