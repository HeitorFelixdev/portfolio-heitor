import axios from "axios";
import { B4A_APP_ID, B4A_REST_KEY, B4A_CONFIGURADO } from "@/config";
import {
  perfil,
  formacoes,
  experiencias,
  projetos,
  habilidades,
} from "@/data/seed";

const http = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 10000,
  headers: {
    "X-Parse-Application-Id": B4A_APP_ID,
    "X-Parse-REST-API-Key": B4A_REST_KEY,
  },
});

// Busca uma classe do Back4App. Se não estiver configurado, ou se a classe
// estiver vazia / a rede falhar, devolve os dados locais e avisa a origem.
async function buscar(classe, reserva, order = "ordem") {
  if (B4A_CONFIGURADO) {
    try {
      const { data } = await http.get(`/classes/${classe}`, {
        params: { order, limit: 100 },
      });
      if (data?.results?.length) {
        return { itens: data.results, origem: "back4app" };
      }
    } catch (e) {
      console.warn(`Back4App (${classe}):`, e?.message);
    }
  }
  return { itens: reserva, origem: "local" };
}

export async function getPerfil() {
  const r = await buscar("Perfil", [perfil], "createdAt");
  return { dados: r.itens[0], origem: r.origem };
}

export const getFormacoes = () => buscar("Formacao", formacoes);
export const getExperiencias = () => buscar("Experiencia", experiencias);
export const getProjetos = () => buscar("Projeto", projetos);
export const getHabilidades = () => buscar("Habilidade", habilidades);
