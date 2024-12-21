import React, { useEffect, useState } from "react";
import Image from "next/image";
import { deleteAvaliacao, getAvaliacao } from "@/utils/api";
import { Avaliacao } from "@/types/Avaliacao";
import { useParams } from "next/navigation";
import Link from "next/link";

interface ModalExcluirAvaliacaoProps {
  onClose: () => void;
}

const ModalExcluirAvaliacao: React.FC<ModalExcluirAvaliacaoProps> = ({
  onClose,
}) => {
  const {id} = useParams(); // Obtem o id do user da avaliacao
  const [avaliacao, setAvaliacao] = useState<Avaliacao>({
    nome: "",
    professor: "",
    conteudo: "",
    userId: 0,
    disciplina: "",
    professorId: 0,
  });

  // Busca os dados da avaliação ao montar o componente
    useEffect(() => {
      if (id) {
        getAvaliacao(Number(id)).then((data) => {
          if (data) {
            setAvaliacao(data);
          }
        }).catch((error) => {
          console.error("Erro ao buscar avaliação:", error);
        });
      }
    }, [id]); // id como dependencia

    // Deleta a avaliação ao clicar no botão
    const handleDelete = async () => {
      try {
        await deleteAvaliacao(Number(id));
      } catch (e) {
        console.error("Erro ao deletar avaliação:", e);
      }
    };
  
    // TESTE DE DADOS
    useEffect(() => {
      console.log("avaliação a ser deletada: ", avaliacao);
    })

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <form className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-8 w-1/4 rounded-xl">
          <div className="my-4 flex flex-col items-center justify-center bg-blue-100 text-black p-4 rounded-lg w-full h-64">
            <Image
              width={100}
              height={100}
              src="/icon-lixeira.png"
              alt="Avatar"
              className="icon  w-100 h-100"
            ></Image>
            <h1 className="text-black my-5 text-2xl">Você tem certeza ?</h1>
          </div>
          <div className="container-footer my-5 flex justify-end items-end">
            <div className=" flex">
              <div
                onClick={onClose}
                className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600"
              >
                Cancelar
              </div>
              <Link href={`/perfil/${avaliacao.userId}`}>
                <button
                  onClick={handleDelete}
                  type="submit"
                  className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent"
                >
                  Apagar
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalExcluirAvaliacao;
