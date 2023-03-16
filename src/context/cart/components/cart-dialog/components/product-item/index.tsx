import { Box, Typography } from '@/components'
import { ButtonIcon } from '@/components/common/button-icon'
import { paths } from '@/constants/routes'
import { resolvePath, toLocaleString } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'
import { ProductItemProps } from './types'

export function ProductItem (props: ProductItemProps) {
  const {
    data: {
      product,
      size
    },
    onRemove
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
      <Link href={resolvePath(paths.product.show, {
        id: product.id,
        sku: product.sku
      })}>
        <Styles.Figure>
          <Image 
            src={product?.images[0]} 
            alt="" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </Styles.Figure>
      </Link>
      <Box flexDirection="column" gap={0.5} flex={1}>
        <Box gap={0.5} alignItems="flexStart">
          <Typography 
            as="strong" 
            size="xsm" 
            color="heading"
            fontWeight="500"
          >{product.name}</Typography>
          <ButtonIcon 
            textHelper="remove"
            label="remove"
            icon={{ name: 'close', size: 15 }}
            onClick={onRemove}
          />
        </Box>
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