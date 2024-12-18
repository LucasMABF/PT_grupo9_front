"use client";
import Image from 'next/image'
import Publicacao from '../../components/Post';
import { loggedInContext } from "../../providers/loggedIn";
import { useContext } from 'react';
import { useParams } from 'next/navigation';

interface Props {
  nome: string
  departamento: string
  disciplinas: string
}
export default function Professor(props: Props) {
  const {id} = useParams();
  console.log(id);
  const {loggedIn} = useContext(loggedInContext);

  return (  
    <>
    
    <div className=" body font-arial bg-green1 text-gray-800 m-0 p-0">
    
    {/* botao de voltar */}
    <a href="/..">
      <button className="back-button absolute w-12 h-12 rounded-full bg-green-700 flex justify-center items-center m-20 cursor-pointer shadow-lg hover:w-20 transition-all">
      <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-black rotate-[-45deg] hover:border-blue-600"></div>
    </button> 
    </a>

    {/* perfil */}
    <div className=" profile-container max-w-lg mx-auto my-0 bg-color2 p-0 shadow-lg text-white">
      <div className="profile-header text-center my-0.5">

        <Image width={100} height={20} src="/unb-banner.jpg" alt="banner" className="profile-banner w-full h-52"></Image>
        <Image height={500} width= {500} src="/profile-picture.webp" alt="Avatar" className="profile-pic w-52 h-52 rounded-full border-4 border-color2 bg-green-200 -mt-28 mx-auto" />
        <h1 className="my-2.5 text-2xl font-bold">{props.nome} Professor</h1>
        <p>{props.departamento} Departamento</p>
      
      {/* Acoes de avaliar para LOGADO */}
      {loggedIn ? (
        <div className="profile-actions text-white my-4 w-3/5 mx-auto flex justify-around">
          <button
            className="edit-btn py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">
            Avaliar
          </button>
        </div>
      
      ) : (<div></div>)}
        </div>

      {/* publicacoes */}
      <div className="post-section mt-4 p-4">
        <hr/>
        <h4 className="my-4">Avaliações</h4>

        <Publicacao nome="nomedeusuario" professor="professor" materia="materia" conteudo="conteudo da postagem"></Publicacao>
        <Publicacao nome="nomedeusuario" professor="professor" materia="materia" conteudo="conteudo da postagem"></Publicacao>

      
      </div>
    </div>
  </div>
  </>
  )
}

