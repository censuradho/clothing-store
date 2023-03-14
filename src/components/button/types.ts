import { LinkProps } from 'next/link'

import { VariantProps } from '@stitches/react'
import { Icon } from '@/components'
import {
  ComponentProps,
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes
} from 'react'
import { Button } from './styles'

type RootButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'onFocus' | 'id' | 'type' | 'disabled' | 'form'
>;

type RootAnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target'>;

type NextLinkProps = Partial<Pick<LinkProps, 'href'>>;

export interface ButtonProps
  extends VariantProps<typeof Button>,
    RootButtonProps,
    NextLinkProps,
    RootAnchorProps {
  children: ReactNode;
  icon?: ComponentProps<typeof Icon>;
  loading?: boolean;
  as?: any;
}