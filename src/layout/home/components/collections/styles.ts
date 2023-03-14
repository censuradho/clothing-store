import { styled } from 'stitches.config'

export const Container = styled('section', {
  margin: '4rem 0',

  '.keen-slider__slide': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const Figure = styled('div', {
  position: 'relative',
  width: '100%',
  height: '300px',

  '@laptops-min': {
    height: '500px'
  }
})

export const DotContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
  justifyContent: 'center'
})

export const Content = styled('div', {
  position: 'absolute',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center'
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
