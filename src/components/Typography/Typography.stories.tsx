import { ComponentMeta } from '@storybook/react'
import React from 'react'
import Template from './Typography'
import { TypographyProps } from './TypographyConfig'
import { withDesign } from 'storybook-addon-designs'


export const Typography = (args: JSX.IntrinsicAttributes & TypographyProps) => <Template {...args} />

Typography.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/1V5L9AoFln0YWL2P9tTHfa/Button-Demo?node-id=0%3A1',
    },
}
export default {
    title: 'Components/Typography',
    component: Typography,
    decorators: [withDesign],
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

