import { Text, TextProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react/*";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, consequatur eum. Hic inventore deserunt molestiae enim repellat optio sequi, ab eveniet autem consequatur. Repudiandae obcaecati quae atque praesentium inventore asperiores!",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
