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
        <div className="flex px-4 items-center">
          <Image
            width={40}
            height={40}
            src="/Perfil_secundario.jpg"
            alt="Avatar"
            className="post-avatar w-10 h-10 rounded-full mr-3"
          />
          <div>
            <span className="user-name font-bold text-gray-900">
              {props.nome}
            </span>
            <span className="text-sm ml-3 text-black">
              <span className="data ">{props.data}</span>, ás{" "}
            </span>
          </div>
        </div>

        <p className="post-text my-3 pl-10 text-gray-800">
          {props.conteudo}
        </p>
      </div>


        </>
    )



}

export default ComponentComentario