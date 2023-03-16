import { Box, Tag, Typography } from '@/components'
import { LikeButton } from '@/components/common'
import { useCart } from '@/context/cart'
import { toLocaleString } from '@/utils/helpers'
import * as Styles from './styles'
import { InfoProps } from './types'

export function Info (props: InfoProps) {
  const {
    data: {
      id,
      name,
      price,
      promotion,
      is_new,
      is_sold_out
    }
  } = props

  const { onToggleLike, likes } = useCart()

  const isLiked = likes.includes(id)

  const renderPrice = () => {
    if (promotion.value) return null

    return (
      <Typography>{toLocaleString(price)}</Typography>
    )
  }

  const renderPromotion = () => {
    if (!promotion.value) return null

    const realPrice  = price - (price * promotion.value)

    return (
      <Box flexDirection="column" gap={0.5}>
        <Styles.PriceWithDiscount>{toLocaleString(price)}</Styles.PriceWithDiscount>
        <Typography size="md" fontWeight="600" color="heading">{toLocaleString(realPrice)}</Typography>
      </Box>
    )
  }

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
      <Tag variant="new">new</Tag>
    )
  }

  const renderSoldOut = () => {
    if (!is_sold_out) return null

    return (
      <Tag variant="soldOut">sold out</Tag>
    )
  }


  return (
    <Styles.Container>
      <Box gap={1}>
        {renderDiscountTag()}
        {renderNewTag()}
        {renderSoldOut()}
      </Box>
      <Box gap={1} alignItems="center" justifyContent="space-between">
        <Typography as="h2" size="lg" color="heading">{name}</Typography>
        <LikeButton active={isLiked} onLike={() => onToggleLike(id)} />
      </Box>
      {renderPrice()}
      {renderPromotion()}
    </Styles.Container>
  )
}