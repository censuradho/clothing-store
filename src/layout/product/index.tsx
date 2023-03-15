import { Box, Container } from '@/components'
import { Size } from '@/services/types'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Header } from '../home/components'
import { Colors, Info, Preview, Sizes } from './components'
import * as Styles from './styles'
import { ProductPageProps } from './types'

const BuyButtons = dynamic(() => import('./components').then(t => t.BuyButtons), {
  ssr: false
})

export function ProductLayout (props: ProductPageProps) {
  const { 
    data
  } = props

  const [size, setSize] = useState<Size | null>(null)

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
              <BuyButtons 
                disabled={!size}
              />
            </Box>
          </Styles.Content>
        </Container>
      </Styles.Container>
    </>
  )
}