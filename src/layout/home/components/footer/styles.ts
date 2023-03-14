import { styled } from 'stitches.config'

export const Container = styled('footer', {
  background: '$foreground',
  padding: '4rem 1rem'
})

export const List = styled('ul', {
  listStyle: 'none',
  
  a: {
    fontWeight: 400,
    paddingTop: '0.5rem',
    display: 'inline-block'
  }
})