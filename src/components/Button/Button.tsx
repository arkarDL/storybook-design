import React from "react";
import ButtonVariant from "./ButtonConfig";

export interface ButtonProps {
  label: string
  variant: "primary" | "secondary" | "outlined"
  size?: "small" | "medium" | "large"
  radius?: "rounded" | "roundedSmall" | "roundedMedium" | "roundedLarge"
  sx?: object
}

// main component
const Button = (props: ButtonProps) => {
  let general = ButtonVariant[props.variant || 'primary']
  let size = ButtonVariant[props.size || "medium"]
  let radius = ButtonVariant[props.radius || 'roundedMedium']
  return <button className={`${general.class} ${size} ${radius}`} style={props.sx && props.sx}>{props.label}</button>;
};

export default Button;
