import Image from 'next/image'
import { Container } from '../container'
import * as Styles from './styles'
import { NewsletterProps } from './types'

export function Newsletter (props: NewsletterProps) {
  return (
    <Styles.Root open>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Figure>
            <Image src="/newsletter.png" alt="newsletter" fill />
          </Styles.Figure>
          <Styles.FormView>

          </Styles.FormView>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}