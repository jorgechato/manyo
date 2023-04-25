import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from "../../components/logo/Logo";


const meta: Meta<typeof Logo> = {
    title: "Logo",
    component: Logo,
    argTypes: {
        appName: { control: "text" },
        url: { control: "text" },
    },
};

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {
    render: (args) => <Logo {...args} />,
    args: {
        appName: "WHAT IS JORGE<br/>DOING TODAY?",
        url: "/",
    },
};