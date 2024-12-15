import React from 'react';
import { useState, useEffect } from 'react';

interface ModalComentarioProps {
    onClose: () => void;
    initialComment: string; //comentario pre existente do post
    onSave: (novoComentario: string) => void;
}

const ModalComentario: React.FC<ModalComentarioProps> = ({ onClose, initialComment, onSave }) => {
    const [comentario, setComentario] = useState("");

    
    useEffect(() => { //inicializa o estado com o comentario inicial
        setComentario(initialComment);
    }, [initialComment]);

    const handleSave = (event: React.FormEvent) => {
        event.preventDefault(); // nao deixa a pagina reiniciar
        onSave(comentario);
    };
 
    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <form onSubmit={handleSave} className="evaluation-container bg-green-700 flex flex-col items-center justify-center px-10 py-12 w-3/5 rounded-xl">
                    <textarea 
                        value={comentario} 
                        onChange={(event) => setComentario(event.target.value)} 
                        name="Comentario" 
                        id="Comentario" 
                        className="my-4 bg-blue-100 text-black p-4 rounded-lg w-full h-64">
                    </textarea>                
                    <div className="container-footer flex justify-end items-end">
                        <div className="-mr-96 flex">
                            <div onClick = {onClose} className="cancel py-2 px-6 tracking-wider border-2 border-green-600 rounded-lg cursor-pointer hover:border-green-600" >Cancelar</div>
                            <button onClick = {onClose} type="submit" className="submit cursor-pointer mx-4 rounded-lg bg-green-600 py-2 px-6 tracking-wider border-2 border-green-600 hover:bg-transparent">Salvar</button>
                        </div>
                        
                    </div>
            
            </form>

        </div>
        
        </>


    );
}

export default ModalComentario;