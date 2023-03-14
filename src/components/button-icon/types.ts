import { IconProps } from "@/components/icon/types";
import { ButtonHTMLAttributes } from 'react'

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
   | 'type'
>

export interface ButtonIconProps extends RootButtonProps {
  icon: IconProps
  label: string
  textHelper?: string
}