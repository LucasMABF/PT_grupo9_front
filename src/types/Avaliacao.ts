import { Professor } from "./Professor";
import { User } from "./User";

export type Avaliacao = {
  id: number,
  conteudo: string,
  disciplina: {nome: string},
  professor: Professor,
  user: User,
}
