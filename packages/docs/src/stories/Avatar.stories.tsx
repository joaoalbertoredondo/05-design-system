import { Avatar, AvatarProps } from "@his-ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react/*";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/joaoalbertoredondo.png",
    alt: "João Alberto",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
