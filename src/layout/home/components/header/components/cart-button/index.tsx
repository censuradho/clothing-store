import { ButtonIcon } from '@/components/button-icon'
import { useCart } from '@/context/cart'
import * as Styles from './styles'

export function CartButton () {
  const { totalProducts } = useCart()

  return (
    <Styles.Container>
      <ButtonIcon 
        label="cart" 
        icon={{ name: 'bag' }} 
      />
      <Styles.Counter>{totalProducts}</Styles.Counter>
    </Styles.Container>
  )
}