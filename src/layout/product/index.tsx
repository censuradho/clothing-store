import { Box, Container } from '@/components'
import { useCart } from '@/context/cart'
import { Size } from '@/services/types'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Header } from '../home/components'
import { Colors, Description, Info, Preview, Sizes } from './components'
import * as Styles from './styles'
import { ProductPageProps } from './types'

const BuyButtons = dynamic(() => import('./components').then(t => t.BuyButtons), {
  ssr: false
})

export function ProductLayout (props: ProductPageProps) {
  const { 
    data
  } = props

  const { onAdd } = useCart()

  const [size, setSize] = useState<Size | null>(null)

  const handleAddToCart = () => {
    if (!size) return;

    onAdd({
      id: data.id,
      name: data.name,
      price: data.price,
      sku: data.sku,
      promotion: data.promotion,
      images: data.images,
      sizes: {
        [size?.label]: {
          ...size,
          quantity: 1
        }
      }
    })
  }

  return (
    <>
      <Header />
      <Styles.Container>
        <Container size="lg">
          <Styles.Content>
            <Preview data={data.images} />
            <Box flexDirection="column">
              <Info data={data} />
              <Sizes
                value={size}
                data={data.sizes} 
                onSelect={setSize}
              />
              <Colors data={data} />
              <Description data={data} />
              <BuyButtons 
                disabled={!size}
                onBuy={() => handleAddToCart()}
              />
            </Box>
          </Styles.Content>
        </Container>
      </Styles.Container>
    </>
  )
}