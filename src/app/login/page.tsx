"use client";
import React, { useContext } from 'react';
import { loggedInContext } from "@/providers/loggedIn";
import { useState } from "react";
import { createUser } from '@/utils/api';
import { User } from '@/types/User';
import { requestLogin } from '@/utils/api';
import { redirect } from 'next/navigation';
import { toast} from 'react-toastify';

const LoginCadastro: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [curso, setCurso] = useState("");
  const [departamento, setDepartamento] = useState("");
  const {login} = useContext(loggedInContext);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setNome("");
    setEmail("");
    setSenha("");
    setCurso("");
    setDepartamento("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isLogin) {
      // Lógica de login
      if (!email || !senha) {
        toast.error("Por favor, preencha todos os campos.");
        return;
      }

      const response = await requestLogin({email, senha});
      if(response){
        login(response);
        toast.success("Logado com sucesso!");
        redirect("/");
      }else{
        toast.error("Erro ao logar!");
      }
    } else {
      if (!nome || !email || !senha || !curso || !departamento) {
        toast.error("Por favor, preencha todos os campos.");
        return;
      }

      // Criacao do novo usuario
      const newUser: User = {
        nome,
        email,
        senha,
        curso,
        departamento,
      };

      const response = await createUser(newUser);
      if (response) {
        toast.success("Usuário criado com sucesso!");

        const login_response = await requestLogin({email, senha}); 
        if(login_response){
          login(login_response);
          redirect("/");
        }else{
          toast.error("Erro ao logar, mas conta criada!");
        }
      } else {
        toast.error("Erro ao criar usuário!");
      }

    }
  };

  return (
    <div className=" bg-gradient-to-r from-green-900 via-green-600 to-green-900 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 m-4">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          {isLogin ? "Login" : "Cadastro de Usuário"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="p-2 text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="curso" className="block text-sm font-medium text-gray-700">
                  Curso
                </label>
                <input
                  type="text"
                  id="curso"
                  className="p-2 text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu curso"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="departamento" className="block text-sm font-medium text-gray-700">
                  Departamento
                </label>
                <input
                  type="text"
                  id="departamento"
                  className="text-black p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu departamento"
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="text-black p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="mt-1 text-black p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium"
          >
            {isLogin ? "Entrar" : "Criar Conta"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleMode}
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            {isLogin ? "Criar Conta" : "Já tem conta? Entrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;

