import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import Button from "../components/common/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "기본값",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "프라이머리",
  style: "primary",
  shdow: true,
};
