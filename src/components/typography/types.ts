import { VariantProps } from '@stitches/react'
import { ReactNode } from 'react'

import { Typography } from './styles'
import { fontSizes, colors } from '@/constants/theme'

export type VariantFontSize = Record<keyof typeof fontSizes, { fontSize: keyof typeof fontSizes }>
export type VariantColors = Record<keyof typeof colors, { color: keyof typeof colors }>

type Variant = VariantProps<typeof Typography>

export interface TypographyProps extends Variant {
  children: ReactNode
  as?: any
  id?: string
}
''