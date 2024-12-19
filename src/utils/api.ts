import axios from "axios";
import {User} from "@/types/User"
import { Avaliacao } from "@/types/Avaliacao";
import { Comentario } from "@/types/Comentario";

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const createUser = async (user : User) =>{
  try{
    const res = await api.post("usuario", user);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const getUser = async (id: number) => {
  try{
    const res = await api.get(`usuario/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const updateUser = async (user: Partial<User>, id:number) => {
  try{
    for(const key in user){
      if(user[key as keyof User] === null || user[key as keyof User] === undefined){
        delete user[key as keyof User];
      }
    }
    const res = await api.patch(`usuario/${id}`, user);
    return res.data;
  }catch(e){
    console.log(e);
  }
}
 
export const deleteUser = async (id: number) => {
  try{
    const res = await api.delete(`usuario/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
} 

export const getProfessores = async (args?: {limit?: number, order_field: string, order?: string}) => {
  try{
    if(args){
      const res = await api.get(`professor/${args.order_field}/${args.order? args.order : "asc"}${args.limit? "/" + args.limit : ""}`);
      return res.data;
    }else{
      const res = await api.get('professor');
      return res.data;
    }
  }catch(e){
    console.log(e);
  }
}

export const getProfessor = async (id: number) => {
  try{
    const res = await api.get(`professor/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const newAvaliacao = async (avaliacao : Avaliacao) =>{
  try{
    const res = await api.post("avaliacao", avaliacao);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const getAvaliacao = async (id: number) => {
  try{
    const res = await api.get(`avaliacao/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const getAvaliacoes = async (args?: {limit?: number, order_field: string, order?: string}) => {
  try{
    if(args){
      const res = await api.get(`avaliacao/${args.order_field}/${args.order? args.order : "asc"}${args.limit? "/" + args.limit : ""}`);
      return res.data;
    }else{
      const res = await api.get('avaliacao');
      return res.data;
    }
  }catch(e){
    console.log(e);
  }
}

export const updateAvaliacao = async (avaliacao: Partial<Avaliacao>, id: number) => {
  try{
    for(const key in avaliacao){
      if(avaliacao[key as keyof Avaliacao] === null || avaliacao[key as keyof Avaliacao] === undefined){
        delete avaliacao[key as keyof Avaliacao];
      }
    }
    const res = await api.patch(`avaliacao/${id}`, avaliacao);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

 export const deleteAvaliacao = async (id: number) => {
  try{
    const res = await api.delete(`avaliacao/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const newComentario = async(comentario: Comentario) => {
  try{
    const res = await api.post("comentario", comentario);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const deleteComentario = async (id: number) => {
  try{
    const res = await api.delete(`comentario/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const updateComentario = async (comentario: Partial<Comentario>, id: number) => {
  try{
    for(const key in comentario){
      if(comentario[key as keyof Comentario] === null || comentario[key as keyof Comentario] === undefined){
        delete comentario[key as keyof Comentario];
      }
    }
    const res = await api.patch(`comentario/${id}`, comentario);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const getComentarios = async (id_avaliacao: number) => {
  try{
    const res = await api.get(`comentario/byavaliacao/${id_avaliacao}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const getComentario = async (id: number) => {
  try{
    const res = await api.get(`comentario/${id}`);
    return res.data;
  }catch(e){
    console.log(e);
  }
}
