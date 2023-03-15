import { api } from "../api"
import { Product } from "../types"

async function findById (id: string | number) {
  return api.get<Product>(`/product/${id}`)
}

export const productService = {
  findById
}