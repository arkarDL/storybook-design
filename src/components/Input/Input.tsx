import React, { FC, InputHTMLAttributes } from 'react'
import InputConfig from './InputConfig';


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    variant?: 'primary' | 'secondary',
    sizes?: 'small' | 'medium' | 'large'
}

const Input: FC<InputProps> = ({ label, name, sizes, variant, ...args }) => {
    const { container, label: labelClass, input: inputClass } = InputConfig[variant || 'primary'];
    const inputSize = InputConfig[sizes || 'medium']
    return <div className={`${container} `}>
        <label className={`${labelClass} `} htmlFor={name}>{label}</label>
        <input className={`${inputClass} ${inputSize}`} id={name} {...args}></input>
    </div>
}

export default Input;