import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback } from "./avatar";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Avatar> & { avatarText: string };

const meta: Meta<StoryProps> = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { avatarText: "RA" },

  render: ({ avatarText, ...args }) => {
    return (
      <Avatar {...args}>
        <AvatarFallback>{avatarText}</AvatarFallback>
      </Avatar>
    );
  },
};
