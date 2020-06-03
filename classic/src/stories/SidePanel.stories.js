import React from 'react';
import { action } from '@storybook/addon-actions';

import SidePanel from '../components/SidePanel';

export default {
    component: SidePanel,
    title: 'SidePanel',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <SidePanel />;

// export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

// export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

// export const Archived = () => (
//     <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
// );