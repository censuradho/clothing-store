import { LikeButtonProps } from './types'

import * as Styles from './styles'
import { Icon } from '../icon'

export function LikeButton (props: LikeButtonProps) {
  const { 
    active,
    onLike
  } = props

  return (
    <Styles.Button onClick={onLike}>
      <Icon 
        name={active ? 'heart' : 'heartOutline'}
        color={active ? 'error' : 'ancesst0'}
      />
    </Styles.Button>
  )
}