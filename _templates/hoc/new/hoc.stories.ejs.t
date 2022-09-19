---
to: src/hoc/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from "@storybook/react/types-6-0";
import <%= name %>, { I<%= name %>Props } from './<%= name %>';

export default {
    title: 'hoc/<%= name %>',
    component: <%= name %>,
} as Meta;

const Template: Story<I<%= name %>Props> = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};