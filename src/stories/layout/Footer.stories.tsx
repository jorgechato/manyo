import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from "../../components/layout/Footer";


const meta: Meta<typeof Footer> = {
    title: "Footer",
    component: Footer,
    argTypes: {
        socials: { control: "array" },
        siteMap: { control: "array" },
        author: { control: "text" },
    },
};

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {
    render: (args) => <Footer {...args} />,
    args: {
        socials: [
            {
                name: "Twitter",
                url: "https://twitter.com/jorgechato",
            },
            {
                name: "GitHub",
                url: "https://github.com/jorgechato",
            }
        ],
        siteMap: [
            { name: "Home", url: "/" },
            { name: "About", url: "/about" }
        ],
        author: "Jorge Chato",
    },
};