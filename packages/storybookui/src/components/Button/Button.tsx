import React, { FC, ButtonHTMLAttributes } from 'react'
import ButtonVariant from "./ButtonConfig";

/** 
* BUTTON TYPES
*/

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant: "primary" | "secondary" | "outlined"
  size?: "small" | "medium" | "large"
  radius?: "rounded" | "roundedSmall" | "roundedMedium" | "roundedLarge"
  sx?: object
}

/** 
* BUTTON COMPONENT
*/

const Button: FC<ButtonProps> = ({ variant, size, radius, sx, label, ...args }) => {
  let general = ButtonVariant[variant || 'primary']
  let inputSize = ButtonVariant[size || "medium"]
  let inputRadius = ButtonVariant[radius || 'roundedMedium']
  return <button className={`${general.class} ${inputSize} ${inputRadius} `} style={sx && sx} {...args}>{label}</button>;
};

export default Button;
