import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PureInboxScreen, InboxScreenProps } from './InboxScreen';
import store from '../lib/redux';

export default {
    component: PureInboxScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'Components/InboxScreen',
} as Meta;

const Template: Story<InboxScreenProps> = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something',
};
