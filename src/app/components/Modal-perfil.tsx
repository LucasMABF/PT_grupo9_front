import React from 'react';
import Image from 'next/image';

interface ModalPerfilProps {
    onClose: () => void;
}

const ModalPerfil: React.FC<ModalPerfilProps> = ({ onClose }) => {

    return (
        <>
        <div className="z-10 fixed bg-gray-800 bg-opacity-75 w-full h-full flex justify-center items-center">
            <div className="perfil-container bg-gray-300 flex flex-col items-center justify-center px-20 py-12 rounded-xl">
                
                <div className="w-full  -mr-28 -mt-8 flex justify-end font-sans text-xl font-bold text-black">
                    <div onClick = {onClose}className="sair cursor-pointer">X</div>
                </div>
                
                <Image width={120} height={120} src="/icon-profile.png" alt="avatar" className="profile-avatar"></Image>
                <div className="cursor-pointer change-avatar -mt-8 p-2 bg-white rounded-full">
                    <Image width={30} height={30} src="/icon-camera.png" alt="change-avatar" className="camera-icon"></Image>
                </div>
                <form className="flex flex-col items-center" action="POST">
                    <input className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Nome"/>
                    <input className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Email" />
                    <input className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Departamento"/>
                    <input className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="text" placeholder="Curso"/>
                    <input className="my-4 tracking-wider text-x1 w-96 px-4 text-black p-2.5 rounded-full" type="password" placeholder="Nova senha"/>

                    <button type="submit" className="my-4 w-44 py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">Salvar</button>
                </form>
            </div>

        </div>
        
        
        </>
    )



};

export default ModalPerfil;