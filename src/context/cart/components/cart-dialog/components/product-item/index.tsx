import { Box, Typography } from '@/components'
import { toLocaleString } from '@/utils/helpers'
import Image from 'next/image'
import * as Styles from './styles'
import { ProductItemProps } from './types'

export function ProductItem (props: ProductItemProps) {
  const {
    data: {
      product,
      size
    }
  } = props

  const renderPrice = () => {
    if (product.promotion.value) return null

    return (
      <Typography 
        as="strong" 
        size="xsm" 
        color="heading"
        fontWeight="500"
      >{toLocaleString(product.price)}</Typography>
    )
  }

  const renderPromotion = () => {
    if (!product.promotion.value) return null

    const price = product.price * product.promotion.value

    return (
      <Typography 
        as="strong" 
        size="xsm" 
        color="heading"
        fontWeight="500"
      >{toLocaleString(price)}</Typography>
    )
  }

  return (
    <Styles.Container>
      <Styles.Figure>
        <Image 
          src={product?.images[0]} 
          alt="" 
          fill
          style={{ objectFit: 'cover' }}
        />
      </Styles.Figure>
      <Box flexDirection="column" gap={0.5} flex={1}>
        <Typography 
          as="strong" 
          size="xsm" 
          color="heading"
          fontWeight="500"
        >{product.name}</Typography>
        {renderPrice()}
        <Typography 
          size="xsm" 
          color="heading"
          fontWeight="400"
        >
          Tamanho: {size.label}
        </Typography>
        <Typography 
          size="xsm" 
          color="heading"
          fontWeight="400"
        >
          Quantidade: {size.quantity}
        </Typography>
      </Box>
    </Styles.Container>
  )
}