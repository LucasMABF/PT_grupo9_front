/*CRIA UMA NOVA AVALIACAO*/
"use client";
import React from 'react';
import { newAvaliacao } from '@/utils/api'
import { Professor } from '@/types/Professor';
import { toast } from 'react-toastify';

interface ModalAvaliacaoProps {
    professor: Professor;
    onClose: () => void;
}
const ModalAvaliacao = (props: ModalAvaliacaoProps) => {

    const [disciplinaId, setDisciplinaId] = React.useState<number | null>(null);
    const [conteudo, setConteudo] = React.useState<string>("");

     // Função para enviar a avaliação
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Evita o reload da página
        if (!disciplinaId || !conteudo.trim()) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }

        const avaliacao = {
            conteudo,
            disciplinaId,
            professorId: props.professor.id,
        };

        const response = await newAvaliacao(avaliacao);
        if(response){
            toast.success("Avaliação enviada com sucesso!");
            props.onClose(); // Fecha o modal após o envio
        }else{
            toast.error("Erro ao enviar a avaliação. Tente novamente.");
        }
    }

    return (
        <>
        <div className="body z-10 fixed bg-gray-800 bg-opacity-75 w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-12 w-3/5 rounded-xl">
              {/* USUARIO ESCOLHE A DISCIPLINA */}      
                <select
                        value={disciplinaId || ""}
                        onChange={(e) => setDisciplinaId(Number(e.target.value))}
                        className="my-2 bg-blue-100 tracking-wider text-x1 w-full px-4 text-black p-2.5 rounded-full"
                        >
                        <option value="" disabled>
                            Selecione a disciplina
                        </option>
                        
                        {props.professor.disciplinas && props.professor.disciplinas.map((disciplina) => (
                            <option key={disciplina.id} value={disciplina.id}>
                                {disciplina.nome}
                            </option>
                        ))}
                              
                </select>
                
                {/* USUARIO ESCREVE A AVALIACAO*/}
                <textarea
                placeholder="Escreva sua avaliação aqui..."
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                className="my-4 bg-blue-100 text-black p-4 rounded-lg w-full h-64">
                 </textarea>

                 {/* BOTOES DE ACAO */}
                    <div className="container-footer flex justify-end items-end">
                        <div className="-mr-96 flex">
                            <div onClick = {props.onClose} className="cancel py-2 px-6 tracking-wider border-2 border-green-700 rounded-lg hover:border-green-600" >
                                Cancelar
                            </div>
                            <button 
                                type="submit" 
                                className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent">Avaliar</button>
                        </div>        
                    </div>
            </form>
        </div>
        </>
    );
}

export default ModalAvaliacao;