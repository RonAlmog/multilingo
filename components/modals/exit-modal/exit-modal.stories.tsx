import type { Meta, StoryObj } from "@storybook/react";
import ExitModal from "./exit-modal";
import { ComponentProps } from "react";
import { useExitModal } from "@/store/use-exit-modal";
import { Button } from "@/components/ui/button/button";

type StoryProps = ComponentProps<typeof ExitModal>;
const meta: Meta<StoryProps> = {
  title: "Components/ExitModal",
  component: ExitModal,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },

  tags: ["autodocs"],

  argTypes: {
    points: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof ExitModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    points: 100,
  },
  render: ({ ...args }) => {
    const { open } = useExitModal();

    return (
      <>
        <Button onClick={open}>Open Modal</Button>
        <ExitModal {...args} />
      </>
    );
  },
};
