import { PropsWithChildren } from 'react'
import { Icon } from '../icon'
import * as Styles from './styles'
import { TextHelperProps } from './types'

export function TextHelper (props: TextHelperProps) {
  const {
    content
  } = props

  return (
    <Styles.Provider>
      <Styles.Root>
        <Styles.Trigger type="button">
          <Icon name="question" size={15} />
        </Styles.Trigger>
        <Styles.Portal>
          <Styles.Content sideOffset={5}>
            <p>
              {content}
            </p>
            <Styles.Arrow />
          </Styles.Content>
        </Styles.Portal>
      </Styles.Root>
    </Styles.Provider>
  )
}