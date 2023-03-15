import { ComponentProps, CSSProperties, ReactNode } from 'react'

import { Container } from './styles'

type ViewStyle = Pick<
  CSSProperties,
  | 'alignSelf'
  | 'alignContent'
  | 'flex'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'backgroundColor'
>;

interface BoxProps extends ViewStyle, ComponentProps<typeof Container> {
  children: ReactNode;
  fullWidth?: boolean;
  maxWidth?: number
  gap?: number;
}

export function Box (props: BoxProps) {
  const {
    children,
    fullWidth,
    gap,
    marginTop,
    marginBottom,
    justifyContent,
    flexDirection,
    alignItems,
    style,
    maxWidth,
    flexWrap,
    ...otherProps
  } =
    props

  return (
    <Container
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      style={{
        ...otherProps,
        ...style,
        display: 'flex',
        width: fullWidth ? '100%' : 'auto',
        maxWidth,
        ...(gap && { gap: `${gap}rem` }),
        ...(marginTop && { marginTop: `${marginTop}rem` }),
        ...(marginBottom && { marginBottom: `${marginBottom}rem` }),
      }}
    >
      {children}
    </Container>
  )
}
