import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="px-4 py-2 text-white bg-blue-500 rounded-md">{props.label}</button>;
};

export default Button;