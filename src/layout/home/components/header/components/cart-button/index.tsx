import { ButtonIcon } from '@/components/common/button-icon'
import { useCart } from '@/context/cart'
import * as Styles from './styles'

export function CartButton () {
  const { totalProducts, setIsCartOpen } = useCart()

  return (
    <Styles.Container>
      <ButtonIcon
        onClick={() => setIsCartOpen(true)}
        label="cart" 
        icon={{ name: 'bag' }} 
      />
      {totalProducts > 0 && <Styles.Counter>{totalProducts}</Styles.Counter>}
    </Styles.Container>
  )
}