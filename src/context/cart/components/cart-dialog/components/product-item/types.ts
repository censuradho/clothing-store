import { CartContextProps } from "@/context/cart/types"
import { Product } from "@/services/types"

export interface ProductItemProps  {
  data: CartContextProps['cartItems'][0]
  onRemove: () => void
}