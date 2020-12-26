import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PureTaskList, TaskListProps } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: PureTaskList,
    title: 'Components/TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as Meta;

const Template: Story<TaskListProps> = args => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [
        { ...TaskStories.Default.args, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args, id: '6', title: 'Task 6' },
    ],
} as TaskListProps;

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks!.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
} as TaskListProps;

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
} as TaskListProps;

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
} as TaskListProps;
