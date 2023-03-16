import { styled } from 'stitches.config'

export const Container = styled('header', {
  height: '65px',
  width: '100%',
  background: '$background',
  border: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  position: 'sticky',
  top: 0,
  zIndex: 10
})

export const NavHeader = styled('div', {
  width: '100%',
  height: '65px',
  borderBottom: '1px solid $border',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center'
})

export const Navigation = styled('nav', {
  width: '100%',
  height: '100vh',
  background: '$background',
  transition: '0.2s ease-in',
  transform: 'translateX(-100%)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,

  variants: {
    active: {
      true: {
        transform: 'translateX(0px)'
      }
    }
  }
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  listStyle: 'none',
  a: {
    fontSize: '$sm',
    textTransform: 'uppercase',
    fontWeight: 400
  }
})