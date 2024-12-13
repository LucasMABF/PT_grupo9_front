import React from 'react';

interface ModalComentarioProps {
    onClose: () => void;
}
const ModalComentario: React.FC<ModalComentarioProps> = ({ onClose }) => {

    return (
        <>
        <div className="body z-10 fixed bg-gray-800 bg-opacity-75 w-full h-full flex justify-center items-center">
            <form action="POST" className="evaluation-container bg-blue-600 flex flex-col items-center justify-center px-10 py-12 w-3/5 rounded-xl">
                    <textarea name="Comentario" id="Comentario" className="my-4 bg-blue-100 text-black p-4 rounded-lg w-full h-64"></textarea>                
                    <div className="container-footer flex justify-end items-end">
                        <div className="-mr-96 flex">
                            <div onClick = {onClose} className="cancel py-2 px-6 tracking-wider border-2 border-blue-600 rounded-lg hover:border-blue-500" >Cancelar</div>
                            <button onClick = {onClose} type="submit" className="submit cursor-pointer mx-4 rounded-lg bg-blue-500 py-2 px-6 tracking-wider border-2 border-blue-500 hover:bg-transparent">Avaliar</button>
                        </div>
                        
                    </div>
            
            </form>

        </div>
        
        </>


    );
}

export default ModalComentario;