import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },

  args: { variant: "default", children: "children" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Outline: Story = {
  args: { variant: "outline" },
};
export const Destructive: Story = {
  args: { variant: "destructive" },
};
export const Secondary: Story = {
  args: { variant: "secondary" },
};
