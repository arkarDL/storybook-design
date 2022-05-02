import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Template, { ButtonProps } from './Button';

export const Button = (args: JSX.IntrinsicAttributes & ButtonProps) => <Template {...args} />

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: {
            defaultValue: 'Hello World'
        },
        variant: {
            options: ['primary', 'secondary', 'outlined'],
            defaultValue: 'primary'
        },
        size: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'medium'
        }
    }
} as ComponentMeta<typeof Button>;


