"use client";
import Image from 'next/image'
import Publicacao from '@/components/Post';
import ModalPerfil from '@/components/Modal-perfil';
import { loggedInContext } from "@/providers/loggedIn";
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getUser } from '@/utils/api';
import { getAvaliacoes } from '@/utils/api';
import { Avaliacao } from '@/types/Avaliacao';
import { deleteUser } from '@/utils/api';

export default function Perfil() {
  const {id} = useParams(); // Obtem o id do usuario;
  const [showModalPerfil, setShowModalPerfil] = useState(false);
  const {loggedIn} = useContext(loggedInContext);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [usuario, setUsuario] = useState({
    nome: "",
    curso: "",
    email: "",
    departamento: "",
  });
  
  // Busca as avaliacoes do usuario ao montar o componente
  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
          if (id) {
            const response = await getAvaliacoes({
              limit: 5,
              order_field: "updatedAt",
              order: "desc",
            });
            if (response) {
              // Filtrar avaliacoes apenas do usuario
              const userAvaliacoes = response.filter((avaliacao: Avaliacao) => avaliacao.userId === Number(id));
              setAvaliacoes(userAvaliacoes);
            }
          }
      } catch (e) {
        console.error("Erro ao buscar avaliações:", e);
      }
    };
    fetchAvaliacoes();
  }, [id]);

  // Busca os dados do usuario ao montar o componente
  useEffect(() => {
    if (id) {
      getUser(Number(id)).then((data) => {
        if (data) {
          setUsuario(data);
        }
      }).catch((error) => {
        console.error("Erro ao buscar usuário:", error);
      });
    }
  }, [id]); // id como dependencia

  // DELETA O USUARIO 
  const handleDeleteUser = async () => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir seu perfil? Esta ação é irreversível!");
    if (!confirmDelete) return;

    try {
      const deletedUser = await deleteUser(Number(id));
      if (deletedUser) {
        alert("Usuário deletado com sucesso!");
        window.location.href = "./";
      } else {
        alert('Erro ao deletar usuário');
      }
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
    }
  };

    // TESTE DE DADOS
    useEffect(() => {
      console.log(usuario);
      console.log(avaliacoes);
    })


  return (  
    <>
    {showModalPerfil ? (
      <ModalPerfil 
      onClose={() => setShowModalPerfil(false)}
      usuarioId={Number(id)}
      nome={usuario.nome}
      email={usuario.email}
      departamento={usuario.departamento}
      curso={usuario.curso}
      ></ModalPerfil>
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
        <Image height={500} width= {500} src="/profile-picture.webp" alt="Avatar" className="profile-pic w-52 h-52 rounded-full border-4 border-color2 bg-green-200 -mt-28 mx-auto" />
        <h1 className="my-2.5 text-2xl font-bold">{usuario.nome} nome</h1>
        <p className="my-2 text-base">{usuario.curso} curso / {usuario.departamento}depto</p>
        <p className="my-2 text-base">{usuario.email} email</p>
      
      {/* Acoes de perfil para LOGADO */}
      {loggedIn ? (
        <div className="profile-actions text-white my-4 w-3/5 mx-auto flex justify-around">
          <button
            onClick={() => setShowModalPerfil(true)} 
            className="edit-btn py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">
            Editar Perfil
          </button>
          <button 
            onClick={() => handleDeleteUser()}
            className="delete-btn py-2 px-5 bg-red-600 rounded-lg cursor-pointer hover:bg-red-800">
            Excluir Perfil
          </button>
        </div>
      
      ) : (<div></div>)}
        </div>

      {/* publicacoes */}
      <div className="post-section mt-4 p-4 min-h-96">
        <hr/>
        <h4 className="my-4">Publicações</h4>

        {avaliacoes.length > 0 ? (
          avaliacoes.map((avaliacao, index) => (
            <Publicacao
              key={index}
              id={avaliacao.userId}
              nome={avaliacao.nome}
              professor={avaliacao.professor}
              materia={avaliacao.disciplina}
              conteudo={avaliacao.conteudo} 
              />
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
