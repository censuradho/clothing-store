import { icons } from "./icons";
import { theme } from "stitches.config";
import { IconProps } from "./types";

export function Icon(props: IconProps) {
  const {
    name, color, customColor, size = 20,
  } = props;

  const Svg = icons[name];

  const fill = ((customColor || theme.colors[color || "heading"].value)) as string;

  if (!Svg) return null
  
  return (
    <Svg 
      style={{ 
        fill 
      }} 
      size={size} 
    />
  );
}