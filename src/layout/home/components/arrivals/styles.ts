import { styled } from 'stitches.config'

export const Container = styled('section', {
  margin: '4rem 0'
})

export const List = styled('ul', {

})

export const Figure = styled('figure', {
  width: '300px',
  height: '300px',
  position: 'relative',

  '@table-min': {
    width: '400px',
    height: '500px',
  }
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '2rem 0'
})

export const SlideView = styled('div', {
  paddingLeft: '1rem',

  img: {
    objectPosition: 'center',
    objectFit: 'cover'
  },
})