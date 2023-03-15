import { environments } from '@/constants/environments'
import { useLocalStorage } from '@/hooks'
import { PropsWithChildren, createContext, useState, useContext } from 'react'
import { CartDialog } from './components'
import { Cart, CartContextProps, ProductCartItemAttr, ResumeBuy } from './types'

const CartContext = createContext({} as CartContextProps)

export function CartProvider ({ children }: PropsWithChildren) {
  const [cart, setCart] = useLocalStorage<Cart>(`${environments.appName}:cart`, {})
  
  const [isCarOpen, setIsCartOpen] = useState(false)

  const handleAdd = (payload: ProductCartItemAttr) => {
    setCart(prevState => {
      const product = prevState[payload.id]

      if (!product) return {
        ...prevState,
        [payload.id]: payload
      }

      const parsedSizes = Object
        .entries(payload.sizes)
        .map(([key, value]) => ({
          [key]: {
            ...value,
            ...(product.sizes[key] && ({
              quantity: product.sizes[key].quantity + value.quantity,
            })),
          },
        }))
        .reduce((prev, next) => ({
          ...prev,
          ...next,
        }), {});

      const sizes = {
        ...product.sizes,
        ...parsedSizes
      }

      return {
        ...prevState,
        [product.id]: {
          ...product,
          sizes
        }
      }
    })

    setIsCartOpen(true)
  }

  const handleDecrease = (productId: number, sizekey: number) => {
    setCart(prevState => {
      const product = prevState[productId];

      if (!product) return prevState;

      const size = product.sizes[sizekey];

      if (!size) return prevState

      if (size.quantity > 0) {
        const parsedSize = {
          ...size,
          quantity: size.quantity - 1
        }

        return {
          ...prevState,
          [productId]: {
            ...product,
            sizes: {
              ...product.sizes,
              [sizekey]: size
            }
          }
        }
      }

      delete product.sizes[sizekey];

      return {
        ...prevState,
        [productId]: product,
      };
    })
  }

  const handleRemove = (productId: number, sizekey: number | string) => {
    setCart(prevState => {
      const product = prevState[productId];

      if (!product) return prevState;

      const size = product.sizes[sizekey];

      if (!size) return prevState
      delete product.sizes[sizekey];

      return {
        ...prevState,
        [productId]: product,
      };
    })
  }

  const totalProducts = Object
    .entries(cart)
    .map(([key, value]) => {
      return Object
        .entries(value.sizes)
        .map(([key, value]) => value.quantity)
        ?.reduce((prev, next) => prev + next, 0)
    })
    .reduce((prev, next) => prev + next, 0)

  const resumeBuy = () => {
    const totalPrice = Object
      .entries(cart)
      .map(([key, product]) => {
        const sizesQuantity = Object
          .entries(product.sizes)
          .map(([key, size]) => size.quantity)
          ?.reduce((prev, next) => prev + next, 0)

        const total = product.price * sizesQuantity

        const subTotal = (product.price - (product.price * product.promotion.value)) * sizesQuantity
        
        console.log(product.promotion.value)

        return {
          total,
          subTotal,
        }
      })

    return totalPrice.length > 0 ? totalPrice
      ?.reduce((prev, next) => ({
        total: prev.total + next.total,
        subTotal: prev.subTotal + next.subTotal
      })) 
      : undefined
  }

  const cartItems = Object.keys(cart).length > 0 ? Object
    .entries(cart)
    .map(([key, product]) => {
      const items = Object
        .entries(product.sizes)
        .map(([key, size]) => ({
          product,
          size
        }))

      return items
    })?.reduce((prev, next) => ([
      ...prev,
      ...next
    ])) : []

  return (
    <CartContext.Provider
      value={{
        cart,
        onAdd: handleAdd,
        onRemove: handleRemove,
        totalProducts,
        resumeBuy: resumeBuy(),
        setIsCartOpen,
        cartItems
      }}
    >
      <CartDialog open={isCarOpen} onOpenChange={setIsCartOpen} />
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)