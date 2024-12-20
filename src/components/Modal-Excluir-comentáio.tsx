import React, { useState, useEffect } from "react";
import { deleteAvaliacao, getUser } from "@/utils/api";
import Link from "next/link";

interface ModalComentarioProps {
  onClose: () => void;
}

const ModalExcluirComentario: React.FC<ModalComentarioProps> = ({
  onClose,
}) => {
  const [userId, setUserId] = useState<number | null>(null);

  // Busca o ID do usuário ao montar o componente
  useEffect(() => {
    const fetchUserId = async () => {
      const user = await getUser(1);
      if (user) {
        setUserId(user.id);
      }
    };
    fetchUserId();
  }, []);

  // const handleDelete = async () => {
  //   if (userId !== null) {
  //     try {
  //       await deleteUser(userId);
  //       console.log("Comentario deletado com sucesso!");
  //       onClose();
  //     } catch (error) {
  //       console.error("Erro ao deletar o comentário:", error);
  //     }
  //   }

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <form className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-8 w-1/4 rounded-xl">
          <div className="my-4 flex flex-col items-center justify-center bg-blue-100 text-black p-4 rounded-lg w-full h-64">
            <img
              width={100}
              height={100}
              src="/icon-lixeira.png"
              alt="Avatar"
              className="icon w-100 h-100"
            />
            <h1 className="text-black my-5 text-2xl">Você tem certeza?</h1>
          </div>
          <div className="container-footer my-5 flex justify-end items-end">
            <div className="flex">
              <div
                onClick={onClose}
                className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600"
              >
                Cancelar
              </div>
              <button
                type="button"
                onClick={() => deleteUser(userId)}
                className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent"
              >
                Apagar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalExcluirComentario;
