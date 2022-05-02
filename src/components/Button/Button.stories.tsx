import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export const Primary: ComponentStory<typeof Button> = () => (
    <Button label='Hello world' />
);

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;
