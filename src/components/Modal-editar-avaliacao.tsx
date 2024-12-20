// EDITA A AVALIACAO ATUAL
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Avaliacao } from '@/types/Avaliacao';
import { updateAvaliacao } from '@/utils/api';

interface ModalEditarAvaliacaoProps {
    onClose: () => void;
    avaliacao: Avaliacao;
    onUpdate: (updateAvaliacao: Avaliacao) => void;
    
}

const ModalEditarAvaliacao: React.FC<ModalEditarAvaliacaoProps> = ({ onClose, avaliacao, onUpdate }) => {
    
    const [conteudo, setConteudo] = useState(avaliacao.conteudo);

    const handleEditarAvaliacao = async () => {
        try {
            const updatedAvaliacao = await updateAvaliacao({ conteudo }, avaliacao.professorId);
            if (updatedAvaliacao) {
                onUpdate({ ...avaliacao, conteudo }); //atualiza o conteudo localmente 
                onClose();
            }
        }
        catch (error) {
            console.error("Erro ao atualizar avaliação", error);
        }
    };
        
    // TESTE DE DADOS   
    useEffect(() => {
        console.log(avaliacao);
    })
    return (
        <Fragment>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            
            <form className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-12 w-3/5 rounded-xl"
                    onSubmit={(e) => {
                    e.preventDefault();
                    handleEditarAvaliacao();
                     }}>
                    <h1 className="text-lg text-black">Editar Avaliação</h1>
                     <textarea
                        placeholder="Digite seu comentário aqui..."     
                       
                        onChange={(event) => setConteudo(event.target.value)} 
                        name="Conteudo" 
                        id="Conteudo" 
                        className="my-4 bg-blue-100 text-black p-4 rounded-lg w-full h-64">
                    </textarea>                
                    <div className="container-footer flex justify-end items-end">
                        <div className="-mr-96 flex">
                            <div onClick = {onClose} 
                                className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600" >
                                Cancelar
                            </div>
                            <button type="submit" className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent">
                                Salvar
                            </button>
                        </div>
                    </div>
            </form>

        </div>
        
        </Fragment>
    )


}

export default ModalEditarAvaliacao;