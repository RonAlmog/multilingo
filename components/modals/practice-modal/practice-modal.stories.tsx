import type { Meta, StoryObj } from "@storybook/react";
import PracticeModal from "./practice-modal";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button/button";
import { usePracticeModal } from "@/store/use-practice-modal";

type StoryProps = ComponentProps<typeof PracticeModal>;
const meta: Meta<StoryProps> = {
  title: "Components/PracticeModal",
  component: PracticeModal,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof PracticeModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    const { open } = usePracticeModal();

    return (
      <>
        <Button onClick={open}>Open Modal</Button>
        <PracticeModal {...args} />
      </>
    );
  },
};
