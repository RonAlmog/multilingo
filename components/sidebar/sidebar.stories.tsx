import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";
import { ComponentProps } from "react";
import { ClerkProvider } from "@clerk/nextjs";

type StoryProps = ComponentProps<typeof Sidebar>;
const meta: Meta<StoryProps> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
  },
  render: ({ ...args }) => {
    return (
      <ClerkProvider>
        <Sidebar {...args} />
      </ClerkProvider>
    );
  },
};
