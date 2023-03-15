import { styled } from 'stitches.config'

export const Container = styled('main', {
  width: '100%',
})

export const Content = styled('div', {
  width: '100%',
  '@laptops-min': {
    display: 'grid',
    gridTemplateColumns: '600px 1fr',
    gap: '2.5rem'
  },
  '@desktop-min': {
    gridTemplateColumns: '700px 1fr',
  }
})