import type { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Item } from '@todo-app/state';

import { TodoItemComponent } from './item.component';

const meta: Meta<TodoItemComponent> = {
  component: TodoItemComponent,
  title: 'ItemComponent',
};
export default meta;
type Story = StoryObj<TodoItemComponent>;

const mockItem: Item = {
  id: '1',
  title: 'Test Item',
  dueDate: new Date(),
  completed: false,
  createdAt: new Date(),
};

export const Primary: Story = {
  args: {
    item: mockItem,
  },
};

export const Heading: Story = {
  args: {
    item: mockItem,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toBeTruthy();
  },
};