import { styled, keyframes } from 'stitches.config'
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled('div', {})

export const {
  Root,
  Trigger,
  Close,
  Portal
} = Dialog

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'transparent',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backdropFilter: 'blur(6px)'
});

export const Content = styled(Dialog.Content, {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '750px',
  maxHeight: '85vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  overflow: 'hidden',
  display: 'flex'
});

export const Figure = styled('figure', {
  width: '400px',
  position: 'relative',
  height: '400px',
  img: {
    objectFit: 'cover'
  }
})

export const FormView = styled('div', {
  padding: '1rem'
})

export const Form = styled('form', {})