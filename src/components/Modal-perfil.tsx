{ /* Modal de edição de perfil do usuário */ }
import React from 'react';
import Image from 'next/image';
import { updateUser } from '@/utils/api';
import { User } from '@/types/User';
import { toast } from 'react-toastify';

interface ModalPerfilProps {
  onClose: () => void;
}

const ModalPerfil = (props: ModalPerfilProps) => {
    const [nomeUsuario, setNomeUsuario] = React.useState<string>("");
    const [emailUsuario, setEmailUsuario] = React.useState<string>("");
    const [departamentoUsuario, setDepartamentoUsuario] = React.useState<string>("");
    const [cursoUsuario, setCursoUsuario] = React.useState<string>("");	
    const [senhaUsuario, setSenhaUsuario] = React.useState<string>("");	

     // Função para salvar as edições do perfil
        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault(); // Evita o reload da página
            const usuario = {
                nome: nomeUsuario? nomeUsuario : undefined,
                email: emailUsuario? emailUsuario : undefined,
                departamento: departamentoUsuario? departamentoUsuario : undefined,
                curso: cursoUsuario? cursoUsuario : undefined,
                senha: senhaUsuario? senhaUsuario : undefined,
            };

            try {
                const response = await updateUser(usuario);
                if(response){
                    toast.success("Perfil atualizado com sucesso!");
                    props.onClose(); // Fecha o modal após o envio
                }else{
                    toast.error("Erro ao atualizar o perfil. Tente novamente.");
                }
            } catch (e) {
                console.error("Erro ao atualizar o perfil:" + e);
                toast.error("Erro ao atualizar o perfil. Tente novamente.");
        }
    }

    return (
        <>
        <div className="z-10 fixed bg-gray-800 bg-opacity-75 w-full h-full flex justify-center items-center">
            <div className="perfil-container bg-gray-300 flex flex-col items-center justify-center px-20 py-12 rounded-xl">
                
                <div className="w-full  -mr-28 -mt-8 flex justify-end font-sans text-xl font-bold text-black">
                    <div onClick = {props.onClose}className="sair cursor-pointer">X</div>
                </div>
                
                <Image width={120} height={120} src="/icon-profile.png" alt="avatar" className="profile-avatar"></Image>
                <div className="cursor-pointer change-avatar -mt-8 p-2 bg-white rounded-full">
                    <Image width={30} height={30} src="/icon-camera.png" alt="change-avatar" className="camera-icon"></Image>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value.trim())} className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Nome"/>
                    <input value={emailUsuario} onChange={(e) => setEmailUsuario(e.target.value.trim())} className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Email" />
                    <input value={departamentoUsuario} onChange={(e) => setDepartamentoUsuario(e.target.value.trim())} className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Departamento"/>
                    <input value={cursoUsuario} onChange={(e) => setCursoUsuario(e.target.value.trim())} className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Curso"/>
                    <input value={senhaUsuario} onChange={(e) => setSenhaUsuario(e.target.value.trim())} className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="password" placeholder="Nova senha"/>

                    <button type="submit" className="my-4 w-44 py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">Salvar</button>
                </form>
            </div>
        </div>
        </>
    )
};

export default ModalPerfil;
