import type { Meta, StoryObj } from "@storybook/react";
import { UserProgress } from "./user-progress";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof UserProgress>;
const meta: Meta<StoryProps> = {
  title: "Components/UserProgress",
  component: UserProgress,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    hearts: {
      control: { type: "number" },
    },
    points: {
      control: { type: "number" },
    },
    hasActiveSubscription: {
      control: { type: "boolean" },
    },
    activeCourse: {
      id: {
        control: { type: "number" },
      },
      title: {
        control: { type: "string" },
      },
      imageSrc: {
        control: { type: "string" },
      },
    },
  },
} satisfies Meta<typeof UserProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hearts: 5,
    points: 100,
    hasActiveSubscription: true,
    activeCourse: {
      id: 8,
      title: "Italian for beginners",
      imageSrc: "/it.svg",
    },
  },
};
