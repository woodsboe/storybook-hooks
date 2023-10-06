import { Meta, StoryObj } from "@storybook/react";
import { GenerateGuidProps, useGenerateGuid } from "./hooks/useGenerateGuid";
import React from "react";

const HookStory = (args: GenerateGuidProps) => {
  const guid = useGenerateGuid(args);
  return <>{guid}</>;
};

const meta = {
  title: "useGenerateGuid",
  component: HookStory,
  tags: ["autodocs"],
  args: {
    input: "Hook documentation",
  },
} satisfies Meta<typeof HookStory>;

export default meta;

type Story = StoryObj<typeof HookStory>;

export const Default: Story = {};
