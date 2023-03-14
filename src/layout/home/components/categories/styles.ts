import { styled } from 'stitches.config'

export const Container = styled('section', {
  margin: '4rem 0',
})

export const Figure = styled('figure', {
  width: '20rem',
  height: '11.9375rem',
  position: 'relative',
  img: {
    objectFit: 'cover'
  },

  '@laptops-min': {
    width: '25rem',
    height: '15.9375rem',
  }
})


export const Title = styled('strong', {
  color: '$ancesst8',
  fontSize: '$lg',
  fontWeight: 500,
  width: 'max-content'
})

export const Content = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 2,
  padding: '2rem',
  width: '80%',
  height: '80%',
  border: '1px solid $ancesst0',
  flexDirection: 'column',
  gap: '0.5rem',

  '&:hover': {
    borderColor: '$ancesst8',
    [`${Title}`]: {
      color: '$ancesst0'
    }
  }
})



export const CategoryItem = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})