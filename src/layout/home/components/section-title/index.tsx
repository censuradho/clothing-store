import { PropsWithChildren } from 'react'

import * as Styles from './styles'
import { SectionTitleProps } from './types'

export function SectionTitle (props: PropsWithChildren<SectionTitleProps>) {
  const { children } = props

  return (
    <Styles.Container>
      <h2>{children}</h2>
      <Styles.Line></Styles.Line>
    </Styles.Container>
  )
}