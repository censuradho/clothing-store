import { Box } from '@/components'
import { ButtonIcon } from '@/components/button-icon'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CartButton } from './components'
import * as Styles from './styles'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styles.Container>
      <Box alignItems="center" gap={0.5}>
        <ButtonIcon 
          label="menu toggle" 
          icon={{ name: 'menuLeft' }} 
          onClick={() => setIsOpen(true)}
        />
        <ButtonIcon 
          label="search" 
          icon={{ name: 'search' }} 
        />
      </Box>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={70} height={70} style={{ objectFit: 'contain' }} />
      </Link>

      <Box alignItems="center" gap={0.5}>
        <ButtonIcon 
          label="like" 
          icon={{ name: 'heartOutline' }} 
        />
        <CartButton />
      </Box>

      <Styles.Navigation active={isOpen}>
        <Styles.List>
          <li>Home</li>
          <li>Cart</li>
        </Styles.List>
      </Styles.Navigation>
    </Styles.Container>
  )
}