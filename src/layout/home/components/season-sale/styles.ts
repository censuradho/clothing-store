import { styled } from 'stitches.config'

export const Container = styled('section', {
  margin: '4rem 0',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Figure = styled('figure', {
  position: 'relative',
  width: '100%',
  height: '400px',
  img: {
    objectFit: 'cover'
  }
})

export const Content = styled('div', {
  position: 'absolute',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center'
})

export const Title = styled('h2', {
  fontSize: '3.3rem',
  color: '$ancesst8',
  fontWeight: 400,
  textAlign: 'center'
})

export const Description = styled('p', {
  fontSize: '2rem',
  color: '$ancesst8',
  fontWeight: 400,
  textAlign: 'center',
  lineHeight: '2.1rem'
})