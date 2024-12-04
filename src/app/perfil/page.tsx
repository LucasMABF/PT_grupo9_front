"use client";
import Image from 'next/image'
export default function Perfil() {

  return (
    <>
    <div className="back-button">
      <div className="arrow"></div>
    </div>
  
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-banner"></div>
        <Image height={500} width= {500} src="/profile-picture.webp" alt="Avatar" className="profile-pic"/>
        <h1 className="bg-slate-800">João da Silva</h1>
        <p>Ciência da Computação / Dept. Ciência da Computação</p>
        <p>jacinto.pinto.24@cjr.org.br</p>
        <div className="profile-actions">
          <button className="edit-btn">Editar Perfil</button>
          <button className="delete-btn">Excluir Perfil</button>
        </div>
      </div>
      
      <div className="post"></div>

    </div>
    </>
  )
}

