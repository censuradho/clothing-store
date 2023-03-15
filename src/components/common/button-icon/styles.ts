import { styled, keyframes } from "stitches.config";
import * as Tooltip from '@radix-ui/react-tooltip';

export const Button = styled("button", {
  width: '2.1875rem',
  height: '2.1875rem',
  border: 'transparent 1px solid',
  outline: 'none',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  
  '&:focus': {
    borderColor: '$heading',
  }
});

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});


export const Content = styled(Tooltip.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: '$xsm',
  lineHeight: 1,
  color: '$text',
  backgroundColor: '$tertiary',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$tertiary',
});

export const {
  Provider,
  Root,
  Trigger,
  Portal,
} = Tooltip