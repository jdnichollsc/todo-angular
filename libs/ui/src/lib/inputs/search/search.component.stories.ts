
import type { Meta, StoryObj } from '@storybook/angular';
import { TodoSearchComponent } from './search.component';

const meta: Meta<TodoSearchComponent> = {
  component: TodoSearchComponent,
  title: 'SearchComponent',
};
export default meta;
type Story = StoryObj<TodoSearchComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<todo-search></todo-search>`,
  }),
};
