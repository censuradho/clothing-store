import { styled } from 'stitches.config'

export const Container = styled('div', {
  position: 'relative'
})

export const Counter = styled('span', {
  minWidth: '15px',
  minHeight: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.5rem',
  color: '$ancesst8',
  borderRadius: '50%',
  background: '$primary',
  position: 'absolute',
  bottom: '0',
  right: '0'
})