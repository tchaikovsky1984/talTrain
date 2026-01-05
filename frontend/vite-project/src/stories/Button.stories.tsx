import { Button } from "../components/Button.tsx";

import { fn } from "storybook/test";
import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react";

type storyProps = ComponentType<typeof Button> & {
  buttonText: string
};

const meta: Meta<storyProps> = {
  component: Button,
  args: {
    onClick: fn()
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "secondary"]
    },
    size: {
      control: {
        type: "select"
      },
      options: ["sm", "md", "lg"]
    }
  }
};

export default meta;

type Story = StoryObj<storyProps>;

export const primary: Story = {
  args: {
    buttonText: "text",
    variant: 'primary',
    size: "md"
  },
  render: ({ buttonText, ...args }) => {
    return (<Button {...args} >{buttonText}</Button>);

  }
};
