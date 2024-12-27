import type { Meta, StoryObj } from "@storybook/react";
import HeartsModal from "./hearts-modal";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button/button";
import { useHeartsModal } from "@/store/use-hearts-modal";

type StoryProps = ComponentProps<typeof HeartsModal>;
const meta: Meta<StoryProps> = {
  title: "Components/HeartsModal",
  component: HeartsModal,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof HeartsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    const { open } = useHeartsModal();

    return (
      <>
        <Button onClick={open}>Open Modal</Button>
        <HeartsModal {...args} />
      </>
    );
  },
};
