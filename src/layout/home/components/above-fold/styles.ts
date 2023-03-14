import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 65px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  
  '.keen-slider': {
    width: '100%',
    height: '100%',
  }
})

export const Slide = styled('div', {
  position: 'relative',
})

export const Figure = styled('figure', {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: 'calc(100vh - 65px)',
  image: {
    objectFit: 'cover'
  }
})

export const Content = styled('div', {
  position: 'absolute',
  zIndex: 2,
  height: '100%',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem'
})
export const DotContainer = styled('div', {
  position: 'absolute',
  bottom: '2rem',
  display: 'flex',
  gap: '1rem',
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

export const Title = styled('h2', {
  fontSize: '4rem',
  fontWeight: 600,
  color: '$heading'
})

export const SubTitle = styled('h2', {
  fontSize: '3.5rem',
  fontWeight: 400,
  color: '$ancesst8'
})