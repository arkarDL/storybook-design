import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export const ButtonComponnent = (args: JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />

export default {
    title: 'Button',
    component: ButtonComponnent,
    argTypes: {
        label: {
            defaultValue: 'Hello World'
        },
        variant: {
            options: ['primary', 'secondary', 'outlined']
        }
    }
} as ComponentMeta<typeof Button>;


