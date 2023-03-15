import { styled, keyframes  } from 'stitches.config'
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled('div', {})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(100%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'transparent',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backdropFilter: 'blur(8px)',
  zIndex: 11,
});

export const Content = styled(Dialog.Content, {
  backgroundColor: '$background',
  position: 'fixed',
  top: '0',
  right: '0',
  width: '100%',
  height: '100vh',
  zIndex: 11,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  display: 'flex',
  flexDirection: 'column',
  '@laptops-min': {
    width: '300px'
  }
});

export const Header = styled('div', {

  height: '65px',  
  padding: '0 1rem',
  borderBottom: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const ScrollView = styled('div', {
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem'
})

export const ResumeView = styled('div', {
  background: '$foreground',
  margin: '1rem 0',
  padding: '2rem 1rem'
})


export const {
  Root,
  Trigger,
  Portal,
  Close
} = Dialog