import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => ({
    props: args,
    template: `<todo-button [variant]="variant">
        <span>Click me</span>
    </todo-button>`,
  }),
};
