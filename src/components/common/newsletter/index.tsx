import { useEventListener, useLocalStorage } from '@/hooks'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../button'
import { ButtonIcon } from '../button-icon'
import { Container } from '../container'
import { Input } from '../input'
import { Typography } from '../typography'
import * as Styles from './styles'
import { NewsletterProps } from './types'

import { environments } from '@/constants/environments'

export function Newsletter (props: NewsletterProps) {
  const [isOpen, setIsOpen]  = useState(false)
  const [alreadyCloseNewsletter, setAlreadyCloseNewsLetter] = useLocalStorage(`${environments.appName}:newsletter`, false)

  console.log(alreadyCloseNewsletter)
  useEventListener('mouseout', () => {
    if (alreadyCloseNewsletter) return;

    setIsOpen(true)
  })

  return (
    <Styles.Root open={isOpen} onOpenChange={state => {
      setIsOpen(state)
      setAlreadyCloseNewsLetter(true)
    }}>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.ButtonIconView>
            <Styles.Close asChild>
              <ButtonIcon
                label="close" 
                icon={{ name: 'close' }}
              />
            </Styles.Close>
          </Styles.ButtonIconView>
          <Styles.Figure>
            <Image src="/newsletter.png" alt="newsletter" fill />
          </Styles.Figure>
          <Styles.FormView>
            <Typography as="strong" size="md" color="heading">Subscribe Newsletter.</Typography>
            <Typography as="P">Subscribe the Anon to get latest products and discount update.</Typography>
            <Styles.Form>
              <Input
                leftIcon={{ name: 'email' }}
                fullWidth
                placeholder="E-mail address"
              />
              <Button>Subscribe</Button>
            </Styles.Form>
          </Styles.FormView>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}