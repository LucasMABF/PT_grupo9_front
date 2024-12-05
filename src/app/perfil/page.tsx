"use client";
import Image from 'next/image'
export default function Perfil() {

  return (  
    
    <div className="body font-arial h-screen bg-gray-100 text-gray-800 m-0 p-0">
    
    {/* cabecalho */}
    <div className="header w-screen h-12 bg-green-950"></div>

    {/* botao de voltar */}
    <button className="back-button absolute w-12 h-12 rounded-full bg-white flex justify-center items-center m-20 cursor-pointer shadow-lg hover:w-20 transition-all">
      <div className="w-2.5 h-2.5 border-l-2 border-t-2 border-black rotate-[-45deg] hover:border-blue-600"></div>
    </button>

    {/* perfil */}
    <div className="profile-container max-w-lg mx-auto my-0 bg-white p-0 rounded-lg shadow-lg">
      <div className="profile-header text-center my-0.5">

        <Image width={100} height={20} src="/profile-banner.jpg" alt="banner" className="profile-banner w-full h-52"></Image>
        <Image height={500} width= {500} src="/profile-picture.webp" alt="Avatar" className="profile-pic w-52 h-52 rounded-full border-4 border-white bg-green-200 -mt-28 mx-auto" />
        <h1 className="my-2.5 text-2xl font-bold">João da Silva</h1>
        <p className="my-2 text-base">Ciência da Computação / Dept. Ciência da Computação</p>
        <p className="my-2 text-base">jacinto.pinto.24@cjr.org.br</p>

        <div className="profile-actions text-white my-4 w-3/5 mx-auto flex justify-around">
          <button className="edit-btn py-2 px-5 bg-green-700 rounded-lg cursor-pointer hover:bg-green-800">Editar Perfil</button>
          <button className="delete-btn py-2 px-5 bg-red-600 rounded-lg cursor-pointer hover:bg-red-800">Excluir Perfil</button>
        </div>
      </div>

      {/* publicacoes */}
      <div className="post-section mt-4 p-4">
        <hr/>
        <h4 className="my-4">Publicações</h4>

        {/* exemplo de post */}
        <div className="post bg-blue-300 p-4 rounded-lg my-4 cursor-pointer">
          <div className="post-header flex items-center mb-3">
            <Image width={10} height={10} src="/profile-picture.webp" alt="Avatar" className="post-avatar w-10 h-10 rounded-full mr-3"/>
            <span className="post-info text-sm text-gray-500"> 
              <span className="user-name text-lg">Jacinto Pinto</span> 
              <span className="estrelas text-lg ml-3 "> 
                  <span className="estrela1 m-0.5 text-yellow-500">&#9733;</span>
                  <span className="estrela2 m-0.5 text-yellow-500">&#9733;</span>
                  <span className="estrela3 m-0.5 text-yellow-500">&#9733;</span>
                  <span className="estrela4 m-0.5">&#9733;</span>
                  <span className="estrela5 m-0.5">&#9733;</span>
              </span> 
              <br/>
            <span className="data">23/12/2024</span>, às <span className="hora">21:42</span> - <span className="professor">Dumbledore</span> - <span className="disciplina">Magia Negra</span>
          </span>
          </div>
        <p className="post-text my-4 text-gray-800">
            Adorei esse professor, ele deixa fazer a prova em grupo e tambem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </p>
        <div className="post-footer text-sm hover:underline">
          <span>2 comentários</span>
        </div>
      </div>

      </div>
    </div>
  </div>
  )
}

