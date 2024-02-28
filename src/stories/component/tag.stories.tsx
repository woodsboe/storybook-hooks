import { Meta, StoryObj } from "@storybook/react";
import {Tag} from './tag';
const meta = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    tagName: 'Tag',
  },
  argTypes: {
    tagName: {
      options: ['Tag', 'Tag 2', 'Tag 3'],
      control: {
        type: 'radio',
        
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args, context) => <Tag {...args} />,
}

