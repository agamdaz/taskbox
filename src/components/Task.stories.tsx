import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Task, TaskProps } from "./Task";

export default {
  component: Task,
  title: "Components/Task",
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
} as TaskProps;

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
} as TaskProps;

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args,
    state: "TASK_ARCHIVED",
  },
} as TaskProps;

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
} as TaskProps;
