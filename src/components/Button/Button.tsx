import React from "react";

export interface ButtonProps {
  label: string
  variant: 'primary' | 'secondary' | 'outlined'
  class?: string
}




// main component
const Button = (props: ButtonProps) => {
  let _getVarient = props.variant === 'primary' ? 'bg-blue-500' :
    'secondary' ? 'bg-green-500' :
      'outlined' ? 'border-2 border-black ' : 'bg-red-200'
  return <button className={`px-4 py-2 text-white rounded-md ${_getVarient} ${props.class}`}>{props.label}</button>;
};

export default Button;

