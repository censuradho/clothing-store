import { styled } from 'stitches.config'

export const Container = styled('div', {
  variants: {
    flexDirection: {
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      revert: {
        flexDirection: 'revert'
      },
      unset: {
        flexDirection: 'unset'
      }
    },
    alignItems: {
      flexStart: {
        alignItems: 'flex-start'
      },
      flexEnd: {
        alignItems: 'flex-end'
      },
      center: {
        alignItems: 'center'
      }
    },
    flexWrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      nowrap: {
        flexWrap: 'nowrap'
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center'
      },
      'flex-start': {
        justifyContent: 'flex-start'
      },
      'space-between': {
        justifyContent: 'space-between'
      },
      'flex-end': {
        justifyContent: 'flex-end'
      }
    }
  }
})
