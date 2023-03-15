import { Product, Size } from "@/services/types"

export interface SizeCartItem extends Size {
  quantity: number
}

export type ProductCartItemAttr = Pick<Product,
  | "name"
  | "price"
  | 'sku'
> & {
  id: number
  sizes: Record<string, SizeCartItem>
}

export type Cart = Record<string, ProductCartItemAttr>

export interface CartContextProps {
  onAdd: (value: ProductCartItemAttr) => void
  onRemove: (value: ProductCartItemAttr) => void
  cart: Cart
  totalProducts: number
}