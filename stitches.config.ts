import { createStitches } from '@stitches/react'

import {
  colors,
  breakpoints,
  fontSizes
} from '@/constants/theme'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors,
    fontSizes,
    radii: {
      default: '8px'
    }
  },
  media: breakpoints
})

const globalStyle = GlobalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    color: '$text',
    'scroll-behavior': 'smooth',
  },
  html: {
    'scroll-behavior': 'smooth',
  },
  kbd: {
    background: '$ancesst6',
    padding: '1px 5px',
    borderRadius: '4px',
    fontSize: '14px',
    color: '$background'
  },
  body: {
    '::-webkit-scrollbar': {
      width: '10px',
      borderRadius: '$default'
    },
    'scroll-behavior': 'smooth',
    /* Track */
    '::-webkit-scrollbar-track': {
      background: '$background',
      borderRadius: '$default'
    },
    
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: '$border',
      borderRadius: '$default'
    },
    
    backgroundColor: '$background',
    width: '100%',
    height: '100%',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  h1: {
    fontWeight: '500',
    fontFamily: '$title',
  },
  h2: {
    fontFamily: '$title',
    fontWeight: '500',
  },
  p: {
    fontFamily: '$text',
    lineHeight: '1.5rem'
  },

  hr: {
    width: '100%',
    height: 1,
    background: '$lightGray',
    border: 'none'
  },

  a: {
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none'
  }
})

export {
  styled,
  getCssText,
  theme,
  css,
  keyframes,
  createTheme,
  globalStyle
}
