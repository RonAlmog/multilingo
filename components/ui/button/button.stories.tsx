import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ComponentProps } from "react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & { buttonText: string };
const meta: Meta<StoryProps> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "locked",
        "default",
        "primary",
        "primaryOutline",
        "secondary",
        "secondaryOutline",
        "danger",
        "dangerOutline",
        "super",
        "superOutline",
        "ghost",
        "sidebar",
        "sidebarOutline",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "sm", "lg", "icon", "rounded"],
    },
  },

  // args: { variant: "default", children: "Click Me" },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "Click Me Now",
    variant: "primary",
    size: "lg",
    disabled: false,
    onClick: fn(),
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Primary: Story = {
  args: { variant: "primary", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const PrimaryOutline: Story = {
  args: { variant: "primaryOutline", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Secondary: Story = {
  args: { variant: "secondary", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SecondaryOutline: Story = {
  args: { variant: "secondaryOutline", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Danger: Story = {
  args: { variant: "danger", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const DangerOutline: Story = {
  args: { variant: "dangerOutline", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Super: Story = {
  args: { variant: "super", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SuperOutline: Story = {
  args: { variant: "superOutline", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Sidebar: Story = {
  args: { variant: "sidebar", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SidebarOutline: Story = {
  args: { variant: "sidebarOutline", size: "lg", buttonText: "Click Me" },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
