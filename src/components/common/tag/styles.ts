import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '4px 8px 2px 8px',
  color: '$ancesst8',
  textTransform: 'uppercase',
  fontSize: '0.78rem',
  width: 'max-content',
  
  variants: {
    variant: {
      new: {
        background: '#81ecec'
      },
      soldOut: {
        background: '#b2bec3'
      },
      discount: {
        background: '#a29bfe'
      },
    }
  }
})