import { Meta, StoryObj } from "@storybook/react";
import {Tag} from './tag';
const meta = {
  title: 'Tag',
  component: Tag,
} satisfies Meta<typeof Tag>

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => <Tag {...args}/>
}