import { styled } from 'stitches.config'

export const Container = styled('div', {
  position: 'relative'
})

export const Figure = styled('figure', {
  width: '300px',
  height: '300px',
  position: 'relative',

  '@table-min': {
    width: '400px',
    height: '400px',
  }
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '2rem 0'
})

export const TagView = styled('div', {
  position: 'absolute',
  top: '10px',
  left: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  zIndex: 3,
})

export const PriceWithDiscount = styled('span', {
  textDecoration: 'line-through',
  color: '$text'
})

export const Tag = styled('div', {
  padding: '4px 8px 2px 8px',
  color: '$ancesst8',
  textTransform: 'uppercase',
  fontSize: '0.78rem',
  width: 'max-content'
})