import type { Meta, StoryObj } from "@storybook/react";
import Promo from "./promo";
import { ComponentProps } from "react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Promo> & { buttonText: string };
const meta: Meta<StoryProps> = {
  title: "Components/Promo",
  component: Promo,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
