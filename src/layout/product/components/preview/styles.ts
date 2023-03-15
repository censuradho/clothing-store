import { styled } from 'stitches.config'

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center'
})

export const Figure = styled('figure', {
  height: '500px',
  position: 'relative',
  img: {
    objectFit: 'cover'
  },

  '@table-min': {
    height: '700px',
  },
})

export const Dot = styled('button', {
  height: '5px',
  width: '30px',
  border: '1px solid $primary',

  variants: {
    active: {
      true: {
        width: '45px',
        background: '$primary'
      }
    }
  }
})

export const DotContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '20px',
  zIndex: 3
})
