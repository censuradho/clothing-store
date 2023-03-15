import { styled } from 'stitches.config'

export const Container = styled('div', {
  marginBottom: '1rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const Size = styled('button', {
  width: '40px',
  height: '40px',
  border: '1px solid $ancesst4',
  '&:hover, &:focus': {
    borderColor: '$ancesst0'
  },
  '*': {
    color: '$heading'
  },

  variants: {
    active: {
      true: {
        background: '$primary',
        color: '$ancesst8'
      }
    }
  }
})

export const PriceWithDiscount = styled('span', {
  textDecoration: 'line-through',
  fontSize: '$xsm'
})

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
})