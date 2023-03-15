import { fontSizes, colors } from '@/constants/theme'

import { styled } from 'stitches.config'
import { parseToVariant } from '@/utils/helpers'


import type {
  VariantColors,
  VariantFontSize
} from './types'

const fontSizesVariants = parseToVariant<VariantFontSize>(fontSizes, 'fontSize')
const colorsVariants = parseToVariant<VariantColors>(colors, 'color')

export const Typography = styled('span', {
  alignContent: 'baseline',
  display: 'inline',
  
  variants: {
    size: fontSizesVariants,
    color: colorsVariants,
    textAlign: {
      center: {
        textAlign: 'center'
      },
      left: {
        textAlign: 'left'
      }
    },
    fontWeight: {
      400: {
        fontWeight: 400
      },
      500: {
        fontWeight: 500
      },
      600: {
        fontWeight: 600
      },
      800: {
        fontWeight: 800
      }
    }
  }
})
