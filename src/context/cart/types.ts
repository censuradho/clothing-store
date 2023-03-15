import { Product, Size } from "@/services/types"
import { Dispatch, SetStateAction } from "react"

export interface SizeCartItem extends Size {
  quantity: number
}

export type ProductCartItemAttr = Pick<Product,
  | "name"
  | "price"
  | 'sku'
  | 'promotion'
  | 'images'
> & {
  id: number
  sizes: Record<string, SizeCartItem>
}

export type Cart = Record<string, ProductCartItemAttr>

export interface ResumeBuy {
  total: number
  subTotal: number
}

export interface CartContextProps {
  onAdd: (value: ProductCartItemAttr) => void
  onRemove: (productId: number, sizekey: number | string) => void
  cart: Cart
  totalProducts: number
  resumeBuy?: ResumeBuy
  cartItems: Array<{
    product: ProductCartItemAttr;
    size: SizeCartItem;
  }>
  setIsCartOpen: Dispatch<SetStateAction<boolean>>

}