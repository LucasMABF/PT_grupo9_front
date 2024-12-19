import React from "react";
import { useState } from "react";

interface ModalExcluirComentarioProps {
  onClose: () => void;
}

const ModalExcluirComentario: React.FC<ModalExcluirComentarioProps> = ({
  onClose,
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <form className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-12 w-1/4 rounded-xl">
          <h1 className="text-black text-2xl">
            Excluir avaliação com comentário?
          </h1>
          <div className="container-footer my-5 flex justify-end items-end">
            <div className=" flex">
              <div
                onClick={onClose}
                className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600"
              >
                Cancelar
              </div>
              <button
                onClick={onClose}
                type="submit"
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
