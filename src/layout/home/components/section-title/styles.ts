import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  margin: '4rem 0',

  h2: {
    fontSize: '$xlg',
    textTransform: 'uppercase',
    fontWeight: 400,
    color: '$heading'
  }
})

export const Line = styled('div', {
  width: '200px',
  height: '1px',
  background: '$ancesst0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: '15px',
    height: '15px',
    border: '1px solid $ancesst0',
    transform: 'rotate(45deg)',
    background: '$background'
  }
})