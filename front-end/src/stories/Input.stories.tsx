import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import Input from "./Atom/Input.tsx";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "인풋 예시입니다",
  bgColor: "gray",
  boderColor: "gray",
};

export const Pink = Template.bind({});
Pink.args = {
  placeholder: "핑크 인풋",
  bgColor: "lisa",
  boderColor: "lisa",
};

export const PinkAndWhite = Template.bind({});
PinkAndWhite.args = {
  placeholder: "핑크 보더 인풋",
  bgColor: "white",
  boderColor: "lisa",
};
