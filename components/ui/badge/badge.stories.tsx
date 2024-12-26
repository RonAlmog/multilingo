import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Badge> & { badgeText: string };

const meta: Meta<StoryProps> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
  args: { variant: "default", children: "Badge" },
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
