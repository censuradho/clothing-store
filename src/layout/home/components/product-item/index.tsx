import { Tag, Typography } from '@/components'
import { paths } from '@/constants/routes'
import { resolvePath, toLocaleString } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'
import { ProductItemProps } from './types'

export function ProductItem (props: ProductItemProps) {
  const { 
    data: {
      images: [image],
      sizes,
      name,
      price,
      promotion,
      is_new,
      id,
      sku,
      is_sold_out
    } 
  } = props

  const renderDiscountTag = () => {
    if (!promotion?.value) return null

    const discount = promotion.value * 100

    return (
      <Tag variant="discount">{`sale ${discount}%`}</Tag>
    )
  }

  const renderNewTag = () => {
    if (!is_new) return null

    return (
      <Styles.Tag style={{ background: '#81ecec' }}>new</Styles.Tag>
    )
  }

  const renderSoldOut = () => {
    if (!is_sold_out) return null

    return (
      <Styles.Tag style={{ background: '#b2bec3' }}>sold out</Styles.Tag>

    )
  }



  const renderDiscount = () => {
    if (!promotion.value) return null

    const priceWithDiscount = (price * promotion.value)
    return (
      <>
        <Styles.PriceWithDiscount>{toLocaleString(price)}</Styles.PriceWithDiscount>
        <Typography size="md" fontWeight="500" color="heading">{toLocaleString(priceWithDiscount)}</Typography>
      </>
    )
  }

  const renderPrice = () => {
    if (promotion.value) return null

    return (
      <Typography size="md" fontWeight="500" color="heading">{toLocaleString(price)}</Typography>
    )
  }
  
  return (
    <Link href={resolvePath(paths.product.show, {
      sku,
      id
    })}>
      <Styles.Container>
        <Styles.TagView>
          {renderDiscountTag()}
          {renderNewTag()}
          {renderSoldOut()}
        </Styles.TagView>
        <Styles.Figure>
          <Image src={image} alt="" fill />
        </Styles.Figure>
        <Styles.Info>
          <Typography size="xsm" color="text">{`${sizes.length} cores`}</Typography>
          <Typography as="strong" fontWeight="400" color="heading" size="md">{name}</Typography>
          {renderPrice()}
          {renderDiscount()}
        </Styles.Info>
      </Styles.Container>
    </Link>
  )
}