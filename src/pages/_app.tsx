

import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import { globalStyle } from 'stitches.config'

const CartProvider = dynamic(() => import('@/context/cart').then(t => t.CartProvider), {
  ssr: false
})

const Newsletter = dynamic(() => import('@/components/common').then(t => t.Newsletter), {
  ssr: false
})

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <CartProvider>
      <Newsletter />
      <Component {...pageProps} />
    </CartProvider>
  )
}
