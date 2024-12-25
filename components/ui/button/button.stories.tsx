import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  args: { variant: "default", children: "Click Me" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Primary: Story = {
  args: { variant: "primary", size: "sm" },
};
export const PrimaryOutline: Story = {
  args: { variant: "primaryOutline" },
};
export const Secondary: Story = {
  args: { variant: "secondary" },
};
export const SecondaryOutline: Story = {
  args: { variant: "secondaryOutline" },
};
export const Danger: Story = {
  args: { variant: "danger" },
};
export const DangerOutline: Story = {
  args: { variant: "dangerOutline" },
};
export const Ghost: Story = {
  args: { variant: "ghost" },
};
export const Sidebar: Story = {
  args: { variant: "sidebar" },
};
export const SidebarOutline: Story = {
  args: { variant: "sidebarOutline" },
};
