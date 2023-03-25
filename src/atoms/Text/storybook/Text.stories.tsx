import Text, { textSizes, textTags } from '../Text';

import type { ComponentStory } from '@storybook/react';

export const textControls = ['tag', 'size', 'text'];

export const textArgTypes = {
  tag: {
    type: { required: false },
    options: textTags,
    description: 'Sets the text tag.',
    control: { type: 'select' },
    table: { defaultValue: { summary: `"p"` } }
  },
  size: {
    type: { required: false, default: 'md' },
    options: textSizes,
    description: 'Sets the text size.',
    control: { type: 'select' },
    table: { defaultValue: { summary: `"md"` } }
  },
  children: {
    type: { required: true },
    name: 'text',
    description: 'Sets the displayed text.',
  },
};

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const text = Template.bind({});
text.parameters = {
  controls: {
    include: textControls
  },
};
text.args = {
  size: 'md',
  tag: 'p',
  children: 'This is text.'
};
