"use client";
import Image from 'next/image'
import Publicacao from '@/components/Post';
import ModalPerfil from '@/components/Modal-perfil';
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext, useEffect } from 'react';
import { getUser } from '@/utils/api';
import { Avaliacao } from '@/types/Avaliacao';
import { User } from '@/types/User';
import ModalConfirmarExcluir from '@/components/ModalConfirmarExcluir';
import { deleteUser } from '@/utils/api';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Perfil() {
  const [showModalPerfil, setShowModalPerfil] = useState(false);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const {loggedIn, logout} = useContext(loggedInContext);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [usuario, setUsuario] = useState<User | null>(null);
  console.log(avaliacoes)

  // Busca as avaliacoes do usuario ao montar o componente
  useEffect(() => {
    getUser().then((response) => {
      if(response){
        setUsuario(response);
        setAvaliacoes(response.avaliacoes);
      }
    });
  }, [avaliacoes]);

  return (  
    <>
    {showModalPerfil ? (
      <ModalPerfil onClose={() => setShowModalPerfil(false)} />
    ) : (<></>)}

    {showModalExcluir ? (
    <ModalConfirmarExcluir onClose={() => setShowModalExcluir(false)} onConfirm={() => {deleteUser().then(() => {logout(); toast.success("Conta apagada com sucesso."); redirect("/")})}}/>
    ): <></>}
    
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
        <Image height={500} width= {500} src="media//profile_pic.svg" alt="Avatar" className="profile-pic w-52 h-52 rounded-full border-4 border-color2 bg-green-200 -mt-28 mx-auto" />
        <h1 className="my-2.5 text-2xl font-bold">{usuario? usuario.nome : "Nome"}</h1>
        <p className="my-2 text-base">{usuario? usuario.curso : "Curso"} / {usuario? usuario.departamento : "Depto"}</p>
      
      {/* Acoes de perfil para LOGADO */}
      {loggedIn ? (
        <div className="profile-actions text-white my-4 w-3/5 mx-auto flex justify-around">
          <button
            onClick={() => setShowModalPerfil(true)} 
            className="edit-btn py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">
            Editar Perfil
          </button>
          <button onClick={() => setShowModalExcluir(true)} className="delete-btn py-2 px-5 bg-red-600 rounded-lg cursor-pointer hover:bg-red-800">Excluir Perfil</button>
        </div>
      
      ) : (<></>)}
        </div>

      {/* publicacoes */}
      <div className="post-section mt-4 p-4 min-h-96">
        <hr/>
        <h4 className="my-4">Avaliações</h4>

        {avaliacoes.length > 0 ? (
          avaliacoes.map((avaliacao: Avaliacao) => (
            <Publicacao avaliacao={avaliacao} key={avaliacao.id}/>
          ))
        ) : (
          <p className="mx-4 my-10 text-gray-400">Ainda não há publicações...</p>
        ) }
      </div>
    </div>
  </div>
  </>
  )
}
