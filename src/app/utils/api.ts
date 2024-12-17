import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
})

type User = {
  nome: string;
  email: string;
  departamento: string;
  curso: string;
  senha: string;
  foto_perfil?: string;
}

export const createUser = async (user: User) => {
  try{
    const res = await api.post("usuario", user);
    return res.data;
  }catch(e){
    console.log(e);
  }
}

export const patchUser = async (user: Partial<User>, id:number) => {
  try{
    console.log(user);
    for(const key in user){
      if(user[key as keyof User] === null || user[key as keyof User] === undefined){
        delete user[key as keyof User];
      }
    }
    console.log(user);
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

