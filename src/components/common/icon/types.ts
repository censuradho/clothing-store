import { theme } from "stitches.config";
import { icons } from "./icons";

type Colors = typeof theme["colors"]
export type IconNames = keyof typeof icons

export interface IconProps {
  name: IconNames
  color?: keyof Colors
  customColor?: string,
  /** in rem */
  size?: number
}