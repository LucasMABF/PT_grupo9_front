import { Avaliacao } from "./Avaliacao"

export type Professor = {
  id: number;
  nome: string;
  departamento: string;
  updatedAt: string;
  avaliacoes: Avaliacao[];
  disciplinas: {id: number, nome: string}[];
}
