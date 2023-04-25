import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Header } from "../../components/layout/Header";


const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
    argTypes: {
        title: { control: "text" },
    },
};

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {
    render: (args) => <Header {...args} />,
    args: {
        title: "WHAT IS JORGE<br/>DOING TODAY?",
    },
};
