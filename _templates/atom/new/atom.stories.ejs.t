---
to: src/components/atoms/<%= name %>/<%= property %>/<%= property %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from "@storybook/react/types-6-0";
import <%= property %>, { I<%= property %><%= name %>Props } from './<%= property %>';

export default {
    title: 'Components/Atoms/<%= name %>/<%= property %>',
    component: <%= property %>,
} as Meta;

const Template: Story<I<%= property %><%= name %>Props> = (args) => <<%= property %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
