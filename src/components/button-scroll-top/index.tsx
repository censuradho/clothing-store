import { useDebounceCallback, useEventListener } from '@/hooks'
import { useRef, useState } from 'react';
import { Icon } from '../icon';
import * as Styles from './styles'

export function ButtonScrollTop () {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = useDebounceCallback((event: Event) => {
    const pageYOffset = window.pageYOffset
    console.log(pageYOffset)
    if (pageYOffset > 500) {
      setIsVisible(true)
      return
    }
    setIsVisible(false)
  }, 100)

  useEventListener('scroll', event => callback(event))

  return (
    <Styles.Button visible={isVisible} ref={ref} onClick={() => window.scrollTo(0, 0)}>
      <Icon name="arrowUp" color="ancesst8" />
    </Styles.Button>
  )
}