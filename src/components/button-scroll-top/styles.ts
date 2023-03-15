import { styled } from 'stitches.config'

export const Button = styled('button', {
  width: '45px',
  height: '45px',
  background: '$primary',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 4,
  transition: '0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    visible: {
      false: {
        opacity: 0,
        visibility: 'hidden'
      }
    }
  }
})