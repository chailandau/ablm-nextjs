import Heading, { headingSizes, headingTags } from '../Heading';

import type { ComponentStory } from '@storybook/react';

export const headingControls = ['tag', 'size', 'heading'];

export const headingArgTypes = {
  tag: {
    type: { required: false },
    options: headingTags,
    description: 'Sets the heading tag..',
    control: { type: 'select' },
    table: { defaultValue: { summary: `"h2"` } }
  },
  size: {
    type: { required: false },
    options: headingSizes,
    description: 'Sets the heading size.',
    control: { type: 'select' },
    table: { defaultValue: { summary: `"md"` } }
  },
  children: {
    type: { required: true },
    name: 'heading',
    description: 'Sets the displayed text.',
  },
};

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const heading = Template.bind({});
heading.parameters = {
  controls: {
    include: headingControls
  },
};
heading.args = {
  tag: 'h1',
  size: 'md',
  children: 'This is a heading.'
};
