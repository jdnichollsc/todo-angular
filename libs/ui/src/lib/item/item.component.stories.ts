import type { Meta, StoryObj } from '@storybook/angular';
import { TodoItemComponent } from './item.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoItemComponent> = {
  component: TodoItemComponent,
  title: 'ItemComponent',
};
export default meta;
type Story = StoryObj<TodoItemComponent>;

export const Primary: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
};

export const Heading: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/item works!/gi)).toBeTruthy();
  },
};