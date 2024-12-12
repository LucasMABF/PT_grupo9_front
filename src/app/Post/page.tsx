"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="body font-arial h-screen bg-gray-100 text-gray-800 m-0 p-0">
      <div className="header w-screen h-12 bg-green-950"></div>
      <div className="h-auto w-96 m-0 ">
        <div className="post-comment">
          <div className="w-full m-3 bg-white rounded-md shadow-xs">
            <div className="flex p-2 overflow-hidden">
              <div className="h-10 w-10 mr-10px rounded-s">
                <img src="img/images (1).jpeg" alt="image" />
              </div>
              <div className="user-meta">
                <div className="uppercase font-medium">Fulano</div>
                <div className="text-xs">10 days ago</div>
              </div>
            </div>
            <div className="px-0 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              error nisi quae odio magni hic porro, at omnis, sunt voluptate id
              illo reprehenderit repellendus recusandae tempora assumenda totam
              iusto explicabo.
            </div>
          </div>
          <div className="w-full m-3 bg-white rounded-md shadow-xs">
            <div className="flex p-2 overflow-hidden">
              <div className="h-10 w-10 mr-10px rounded-s">
                <img src="img/images.jpeg" alt="image" />
              </div>
              <div className="user-meta">
                <div className="uppercase font-medium">Beltrano</div>
                <div className="text-xs">12 days ago</div>
              </div>
            </div>
            <div className="px-0 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              error nisi quae odio magni hic porro, at omnis, sunt voluptate id
              illo reprehenderit repellendus recusandae tempora assumenda totam
              iusto explicabo.
            </div>
          </div>
        </div>
        <div className="p-3 overflow-hidden">
          <div className="flex w-max">
            <div className="w-6 h-6 mr-3 rounded-lg">
              <img src="img/images (1).jpeg" alt="image2" />
            </div>
            <div className="name">Fulano</div>
          </div>
          <form action="" className="post">
            <textarea
              className="bg-black w-fit h-40 mx-3 p-3"
              placeholder="Your Massage"
            ></textarea>
            <button className="shadow-xs outline-none float-right px-2 bg-green-500 bg-white cursor-pointer rounded">
              comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
