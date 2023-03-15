import { forwardRef } from 'react'
import { Icon } from '../icon'
import * as Styles from './styles'
import { ButtonIconProps } from './types'

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>((props, ref) => {
  const {
    icon,
    label,
    textHelper,
    ...otherProps
  } = props

  const size = (icon?.size || 13) * 2

  return (
    <Styles.Provider>
      <Styles.Root>
        <Styles.Trigger ref={ref} asChild>
          <Styles.Button 
            aria-label={label} 
            {...otherProps}
            style={{ 
              width: size, 
              height: size 
            }}
          >
            <Icon {...icon}  />
          </Styles.Button>
        </Styles.Trigger>
        {textHelper && (
          <Styles.Portal>
            <Styles.Content sideOffset={5}>
              {textHelper}
              <Styles.Arrow />
            </Styles.Content>
          </Styles.Portal>
        )}
      </Styles.Root>
    </Styles.Provider>
  )
}) 