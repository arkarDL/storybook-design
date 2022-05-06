import { ComponentMeta } from '@storybook/react'
import React from 'react'
import Template from './Typography'
import { TypographyProps } from './TypographyConfig'
export const Typography = (args: JSX.IntrinsicAttributes & TypographyProps) => <Template {...args} />
export default {
    title: 'Components/Typography',
    component: Typography,
    argTypes: {
        role: {
            options: ['h1', 'h2', 'h3', 'p', 'a'],
            defaultValue: 'p'
        },
        fontWeight: {
            options: ['lighter', 'normal', 'semibold', 'bold'],
            defaultValue: 'normal'
        },
        children: {
            defaultValue: 'Hello World',
            control: 'text'
        },
        size: {
            options: ['small', 'medium', 'large', 'xl', '2xl', '3xl', '4xl', '5xl'],
            defaultValue: 'medium'
        },

    }

} as ComponentMeta<typeof Typography>;

