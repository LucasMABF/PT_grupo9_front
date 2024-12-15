"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  body: string;
  postId: number;
  user: { id: number; username: string };
}

export default function Post() {
  const [ShowPost, setShowPost] = useState(false);
  const [Post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments");
        const data = await response.json();
        setPost(data.comments);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {ShowPost ? (
        <div>
          {Post.map((post) => (
            <div key={post.id}>
              <p>{post.body}</p>
              <span>By: {post.user.username}</span>
            </div>
          ))}
        </div>
      ) : null}

      <main className="body bg-gray-100 justify-center items-center w-screen h-screen flex flex-col">
        {/* Comment Box */}
        <div className="bg-white border border-x-1 border-black h-full max-w-full mx-auto py-4 px-4">
          <div className="bg-blue-300 px-10 py-10 rounded-[50px] shadow-lg">
            <div className="flex items-center">
              <Image
                width={40}
                height={40}
                src="/profile-picture.webp"
                alt="Avatar"
                className="post-avatar w-10 h-10 rounded-full mr-3"
              />
              <div>
                <span className="user-name text-lg font-bold">
                  Jacinto Pinto
                </span>
                <span className="estrelas text-lg ml-3">
                  <span className="estrela1 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela2 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela3 m-0.5 text-yellow-500">
                    &#9733;
                  </span>
                  <span className="estrela4 m-0.5">&#9733;</span>
                  <span className="estrela5 m-0.5">&#9733;</span>
                </span>
              </div>
            </div>

            <span className="post-info text-sm text-gray-500">
              <span className="data">23/12/2024</span>, às{" "}
              <span className="hora">21:42</span> -{" "}
              <span className="professor">Dumbledore</span> -{" "}
              <span className="disciplina">Magia Negra</span>
            </span>

            <p className="post-text my-4 text-gray-800">
              Adorei esse professor, ele deixa fazer a prova em grupo e também
            </p>
            <div className="w-full flex justify-between items-center">
              <button onClick={() => setShowPost(true)}>2 comentários</button>
              <div className="flex gap-4">
                <button>Editar</button>
                <button>Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
