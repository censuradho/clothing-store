import * as Styles from './styles'
import { SearchProps } from './types'

export function Search (props: SearchProps) {
  const { 
    open
  } = props

  if (!open) return null
   
  return (
    <Styles.Container></Styles.Container>
  )
}