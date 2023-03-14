import { forwardRef } from 'react'

import { Icon } from '@/components'

import Link from 'next/link'
import * as Styles from './styles'

import { ButtonProps } from './types'

import LoadingSvg from 'public/loading.svg'

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
  const { children, icon, loading, disabled, href, type, as, ...otherProps } =
    props

  const renderButton = () => {
    const Loader = () => loading && (
      <LoadingSvg height={30} width={30} />
    )
    const Content = () => !loading  && (
      <>
        {icon && <Icon {...icon} />}
        <span>{children}</span>
      </>
    )
    return (
      <Styles.Button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...otherProps}
      >
        {Content()}
        {Loader()}
      </Styles.Button>
    )
  }

  const renderContent = () => {
    if (as === 'a' && href) {
      return <Link ref={ref} href={href}>{renderButton()}</Link>
    }

    return renderButton()
  }

  return renderContent()
})