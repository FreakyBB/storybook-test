import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { MButtonComponent } from './m-button.component';
import { MButtonModule } from './m-button.module';

type ComponentWithCustomControls = MButtonComponent;

const meta: Meta<ComponentWithCustomControls> = {
  title: 'Mandy/M Button',
  component: MButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MButtonModule],
    }),
  ],
  parameters: {
    docs: { description: { component: `MButton` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

const Template: Story<ComponentWithCustomControls> = (
  args: ComponentWithCustomControls
) => ({ props: args });

export const MButton = Template.bind({});
MButton.args = {};
