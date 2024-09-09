import { Toast, ToastProps } from "@his-ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  argTypes: {
    open: {
      control: "boolean",
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {
  args: {
    open: true,
  },
};
