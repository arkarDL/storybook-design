import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import InputForm from './login';

export default {
  title: 'Demo/Testing/Visual',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<any> = (args) => <InputForm {...args} />;

export const FilledForm = Template.bind({});

FilledForm.play = async ({ canvasElement }) => {

  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('password'), 'change@email.com', {
    delay: 100,
  });
  await userEvent.click(canvas.getByRole('button'));
};