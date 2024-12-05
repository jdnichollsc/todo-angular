
import type { Meta, StoryObj } from '@storybook/angular';
import { TodoFormComponent } from './form.component';

const meta: Meta<TodoFormComponent> = {
  component: TodoFormComponent,
  title: 'FormComponent',
};
export default meta;
type Story = StoryObj<TodoFormComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<todo-form></todo-form>`,
  }),
};
