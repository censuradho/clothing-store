import { Box, Typography } from '@/components'
import * as Styles from './styles'
import { ColorProps } from './types'

export function Colors (props: ColorProps) {
  const { 
    data
  } = props

  const renderColors = data.colors.map((value, index) => (
    <Styles.Color key={index} style={{ background: value.color }}></Styles.Color>
  ))

  console.log(data.colors)

  return (
    <Styles.Container>
      <Typography color="heading" size="md">Colors</Typography>
      <Box gap={0.8} marginTop={1}>
        {renderColors}
      </Box>
    </Styles.Container>
  )
}