import { api } from "../api";
import { HomeResponse } from "./types";

async function find () {
  return api.get<HomeResponse>('/home')
}

export const homeService = {
  find
}