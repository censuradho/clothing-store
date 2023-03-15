import * as Styles from './styles'
import { SizeProps } from './types'

export function Sizes (props: SizeProps) {
  const { data, onSelect, value: current } = props
  
  const renderSizes = data.map((value, index) => (
    <li key={index}>
      <Styles.Size
        active={value.label === current?.label} 
        onClick={() => onSelect?.(value)}
      >{value.label}</Styles.Size>
    </li>
  ))

  return (
    <Styles.Container>
      <Styles.List>{renderSizes}</Styles.List>
    </Styles.Container>
  )
}