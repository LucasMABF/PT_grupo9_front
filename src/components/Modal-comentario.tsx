// CRIA UM NOVO COMENTARIO 
import React from 'react';
import { useState, useEffect } from 'react';
import { getUser } from '@/utils/api';
import { Comentario } from '@/types/Comentario';
import { newComentario } from '@/utils/api';

interface ModalComentarioProps {
    onClose: () => void;
    onComentarioAdd: (Comentario: Comentario) => void;
    avaliacaoId: number;
}

const ModalComentario: React.FC<ModalComentarioProps> = ({ onClose, onComentarioAdd, avaliacaoId }) => {
    const [comentario, setComentario] = useState("");
    const [userId, setUserId] = useState<number | null>(null);

    // Busca o ID do usuario ao montar o componente
    useEffect(() => {
        const fetchUserId = async () => {
            const user = await getUser(1);  // AJUSTAR PARA O ID DO USUARIO LOGADO
            if (user) {
                setUserId(user.id);
            }
        }
        fetchUserId();
    }, []);

    const handleAddComentario = async () => {
        try {        
            if (!userId) {
                console.error("Usuário não encontrado");
                return;
            }

        const newComentarioObj: Comentario = {
            userId: userId,
            avaliacaoId: avaliacaoId,
            conteudo: comentario,
            nome: "Nome do usuário",
            updatedAt: new Date().toISOString(),
        };

        const response = await newComentario(newComentarioObj);

        if (response) {
            onComentarioAdd(response);
            onClose();
        }
        
        } catch (error) {
            console.error("Erro ao adicionar comentário", error);
        }
    }

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            
            <form className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-12 w-3/5 rounded-xl"
                    onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComentario();
                     }}>
                    <h1 className="text-lg text-black">Adicionar comentário</h1>
                     <textarea
                        placeholder="Digite seu comentário aqui..."     
                        value={comentario} 
                        onChange={(event) => setComentario(event.target.value)} 
                        name="Comentario" 
                        id="Comentario" 
                        className="my-4 bg-blue-100 text-black p-4 rounded-lg w-full h-64">
                    </textarea>                
                    <div className="container-footer flex justify-end items-end">
                        <div className="-mr-96 flex">
                            <div onClick = {onClose} className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600" >
                                Cancelar
                            </div>
                            <button type="submit" className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent">
                                Salvar
                            </button>
                        </div>
                    </div>
            </form>

        </div>
        
        </>


    );
}

export default ModalComentario;