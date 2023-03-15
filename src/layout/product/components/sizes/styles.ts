import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '1rem',
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

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
})