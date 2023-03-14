import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',

  variants: {
    size: {
      sm: {
        '@laptops-min': {
          maxWidth: '720px'
        }
      },
      md: {
        '@laptops-min': {
          maxWidth: '1240px'
        }
      },
      lg: {
        '@laptops-min': {
          maxWidth: '1320px'
        },
      }
    }
  }
})