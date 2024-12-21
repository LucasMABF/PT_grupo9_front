"use client";
import Image from 'next/image'
import { loggedInContext } from "@/providers/loggedIn";
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProfessor} from '@/utils/api';
import ModalAvaliacao from '@/components/Modal-avaliacao';
import { getAvaliacoes } from '@/utils/api';
import Publicacao from '@/components/Post';
import { Avaliacao } from '@/types/Avaliacao';
import { Professor as Prof } from '@/types/Professor';

export default function Professor() {

  const {id} = useParams(); // Obtem o id do professor 
  const {loggedIn} = useContext(loggedInContext);
  const [showModalAvaliacao, setShowModalAvaliacao] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  const[professor, setProfessor] = useState<Prof | null>(null);

   // Busca os dados do professor ao montar o componente
   useEffect(() => {
    getProfessor(Number(id)).then((data) => {
      if(data){
        setProfessor(data);
        setAvaliacoes(data.avaliacoes);
      }
    });
  }, [id]);

  return (  
    <>
  {/* Modal de avaliação  FALTA ENVIAR O ID DO USUARIO QUE NAO CONSEGUI IMPORTAR*/}
    {(showModalAvaliacao && professor) ? (
        <ModalAvaliacao  
          professor={professor}
          onClose={() => setShowModalAvaliacao(false)}>

        </ModalAvaliacao>
            
        ) : (<div></div>)}
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
        <Image height={500} width= {500} src="/media/profile_pic.svg" alt="Avatar" className="profile-pic w-52 h-52 rounded-full border-4 border-color2 bg-green-200 -mt-28 mx-auto" />
        <h1 className="my-2.5 text-2xl font-bold">{professor? professor.nome : "Nome"}</h1>
        <p>{professor? professor.departamento : "Departamento"}</p>
      
      {/* Acoes de avaliar para LOGADO */}
      {loggedIn ? (
        <div className="profile-actions text-white my-4 w-3/5 mx-auto flex justify-around">
          <button
            onClick={() => setShowModalAvaliacao(true)}
            className="edit-btn py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">
            Avaliar
          </button>
        </div>
      
      ) : (<></>)}
        </div>

      {/* publicacoes */}
      <div className="post-section mt-4 p-4 min-h-96">
        <hr/>
        <h4 className="my-4">Avaliações</h4>

        {avaliacoes.length > 0 ? (
          avaliacoes.map((avaliacao, index) => (
            <Publicacao
              key={index}
              id={avaliacao.userId}
              nome={avaliacao.nome}
              professor={avaliacao.professor}
              materia={avaliacao.disciplina}
              conteudo={avaliacao.conteudo} />
          ))
        ) : (
          <p className="text-center m-4 text-gray-500">Nenhuma avaliação encontrada...</p>
        )}
      
      </div>
    </div>
  </div>
  </>
  )
}

