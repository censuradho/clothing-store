import { VariantProps } from "@stitches/react";
import { IconProps } from "@/components/common/icon/types";
import { InputHTMLAttributes, KeyboardEvent } from "react";

import { Container } from "./styles";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  "onChange"
  | "onFocus"
  | "onBlur"
  | "name"
  | "id"
  | "placeholder"
  | "defaultValue"
  | "type"
  | "autoFocus"
  | "disabled"
  | "maxLength"
  | 'inputMode'
  | 'autoComplete'
  | 'readOnly'
  | 'onMouseDown'
  | 'required'
>

type InputStylesProps = Pick<VariantProps<typeof Container>,
  "fullWidth"
>
export interface InputProps extends
  RootInputProps,
  InputStylesProps {
  label?: string
  errorMessage?: string
  textHelper?: string
  leftIcon?: IconProps
  rightIcon?: IconProps
  onRightIconClick?: () => void;
  onLeftIconClick?: () => void;
  value?: string
  onMask?: (event: KeyboardEvent<HTMLInputElement>) => void
  format?: 'string' | 'number'
  loading?: boolean
}
