import type { Meta, StoryObj } from "@storybook/react";
import Quests from "./quests";
import { ComponentProps } from "react";
import StickyWrapper from "../sticky-wrapper";

type StoryProps = ComponentProps<typeof Quests>;
const meta: Meta<StoryProps> = {
  title: "Components/Quests",
  component: Quests,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    points: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Quests>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    points: 100,
  },
  render: ({ ...args }) => {
    return (
      <StickyWrapper>
        <Quests {...args} />
      </StickyWrapper>
    );
  },
};
