import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Template, { ButtonProps } from './Button';
import { withDesign } from 'storybook-addon-designs'

export const Button = (args: JSX.IntrinsicAttributes & ButtonProps) => <Template {...args} />
Button.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/1V5L9AoFln0YWL2P9tTHfa/Button-Demo?node-id=1%3A22',
    },
}
export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withDesign],

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


