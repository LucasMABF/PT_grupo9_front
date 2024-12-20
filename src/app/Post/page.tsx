"use client";
import Image from "next/image";
import { loggedInContext } from "@/providers/loggedIn";
import ModalComentario from "@/components/Modal-comentario";
import ComponentComentario from "@/components/Comentario";
import { useState, useContext, useEffect } from "react";
import { getAvaliacao } from "@/utils/api";
import { Avaliacao } from "@/types/Avaliacao";
import { useParams } from "next/navigation";
import { Comentario } from "@/types/Comentario";
import { getComentarios } from "@/utils/api";
import ModalExcluirComentario from "@/components/Modal-Excluir-comentáio";
import ModalEditarAvaliacao from "@/components/Modal-editar-avaliacao";

export default function Post() {
  const {id} = useParams(); // Obtem o id do user da avaliacao
  const [showButtonComments, setShowButtonComments] = useState(false);
  const { loggedIn } = useContext(loggedInContext);
  const [excluirComentario, setExcluirComentario] = useState(false);
  const [showModalComentario, setShowModalComentario] = useState(false);
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [showModalAvaliacao, setShowModalAvaliacao] = useState(false);
  const [avaliacao, setAvaliacao] = useState({
    nome: "",
    materia: "",
    professor: "",
    data: "",
    conteudo: "",
    userId: 0,
    disciplina: "",
    professorId: 0,
  });

  // Busca os dados dos comentarios ao montar o componente
  useEffect(() => {
    const fetchComentarios = async () => {
      if (id) {
        const response = await getComentarios({
          avaliacaoId: Number(id),
          limit: 10,
          order_field: "updatedAt",
          order: "desc",
        });
        if (response) {
          setComentarios(response);
        }
      }
    };
    fetchComentarios();
  }, [id]);
  

  // Busca os dados da avaliacao ao montar o componente
  useEffect(() => {
    const fetchAvaliacao = async () => {
      if (id) {
        const data = await getAvaliacao(Number(id)); // Certifique-se de que o ID seja um número
        if (data) {
          setAvaliacao(data);
        }
      }
    };
    fetchAvaliacao();
  }, [id]);

  return (
    <>
    {showModalAvaliacao && (
      <ModalEditarAvaliacao 
        onClose={() => setShowModalAvaliacao(false)} 
        avaliacao={avaliacao}
        onUpdate={(updatedAvaliacao: Avaliacao) =>
          setAvaliacao((prev => ({ ...prev, ...updatedAvaliacao })))
        } 
      ></ModalEditarAvaliacao>
    )}
    
      {showModalComentario && (
        <ModalComentario 
          onClose={() => setShowModalComentario(false)} 
          onComentarioAdd={(newComentario: Comentario) => setComentarios((prev) => [newComentario, ...prev])}
          avaliacaoId={Number(id)}
          />
      )}

      {excluirComentario && (
        <ModalExcluirComentario onClose={() => setExcluirComentario(false)} />
      )}

      {/* botao de voltar */}
      <a href="/perfil">
        <button className="back-button absolute w-12 h-12 rounded-full bg-green-700 flex justify-center items-center m-20 cursor-pointer shadow-lg hover:w-20 transition-all">
          <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-black rotate-[-45deg] hover:border-blue-600"></div>
        </button>
      </a>

      <main className="body  bg-origin-content justify-center items-center w-screen h-screen flex flex-col">
        {/* Comment Box */}
        <div className="bg-color2 border border-black h-full max-w-lg min-w-[30%] mx-auto p-4 overflow-x-auto ">
          <div className="bg-color1 px-10 py-10 rounded-[50px] shadow-lg">
            <div className="flex items-center ">
              <Image
                width={40}
                height={40}
                src="/profile-picture.webp"
                alt="Avatar"
                className="post-avatar w-10 h-10 rounded-full mr-3"
              />

              <div>
                <span className="user-name text-lg font-bold text-gray-900">
                  {avaliacao.nome} Joao da Silva
                </span>

                <span className="estrelas text-lg ml-3">
                  <span className="estrela1 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela2 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela3 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela4 m-0.5">&#9733;</span>
                  <span className="estrela5 m-0.5">&#9733;</span>
                </span>
              </div>
            </div>

            <span className="post-info text-sm text-black">
              <span className="data">23/12/2024</span>, às{" "}
              <span className="hora">21:42</span> -{" "}
              <span className="professor">{avaliacao.professor} professor</span> -{" "}
              <span className="disciplina">{avaliacao.materia} disciplina</span>
            </span>

          <div className="text-gray-900 py-5 conteudo">
            <p>{avaliacao.conteudo} Conteudo da avaliacao lorem ipsum is a great way to inteact with a random text.</p>
          </div>
            

            <div className="w-full text-black flex justify-between">
              <button
                className="hover:underline cursor-pointer "
                onClick={() => setShowButtonComments(!showButtonComments)}
              >
                {showButtonComments ? "Ocultar comentários" : "Ver comentários"}
              </button>

              {/*Implementando função de logado e deslogado */}
              {loggedIn && (
                <div className="flex gap-4">
                  <button className="ADICIONAR-COMENTARIO w-7 h-7 text-x1 border-black rounded-full border-2 hover:bg-blue-400" onClick={() => setShowModalComentario(true)}>+</button>
                  
                  <button onClick={() => setShowModalAvaliacao(true)}>
                    <Image
                      width={20}
                      height={20}
                      src="/icon-editar.png"
                      alt="editar-post"
                      className="cursor-pointer rounded-sm hover:bg-blue-400"
                    ></Image>
                  </button>
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
              )}
            </div>
          </div>

          {showButtonComments && (
            <>

              {comentarios.length > 0 ? (
                comentarios.map((comentario, index) => (
                  <ComponentComentario
                    key={index} // Use `id` como chave única
                    nome={comentario.nome} 
                    data={comentario.updatedAt}
                    conteudo={comentario.conteudo}
                  />
                ))
              ) : (
                <div className="p-10 text-gray-400">Nenhum comentário encontrado...</div>
              )}

            </>
          )}
        </div>
      </main>
    </>
  );
}
