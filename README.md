# Manyo - React/Next components

> A collection of React components to standarice mypersonal brand

Manyo comes from the spanish word `maño` wich is a coloquial demonym for the people of the province of Zaragoza, Spain (where I'm originally from). It can come from the latin word `magnus` wich means `great` or `big`.

This component library doesn't aim to be a general/great/big purpose library, but a collection of components that I use in my personal projects.

Feel free to use it, but I won't be active on this project, so don't expect any support.

## Installation

Update your `~/.npmrc` file to include the following line.

```bash
# ~/.npmrc
registry=https://registry.npmjs.org/
@jorgechato:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<MD_TO_REQUEST_TOKEN>
```

Then install the package.

```bash
$ npm install @jorgechato/manyo
```

## List of components you can use

```js
import {
    Footer, Header, Logo, // for basic layout

    // COMMING SOON
    Article, ArticleList, Tags, // for cms content
    Readme, // for code content
    Indicator, Project, ProjectList, // for status page
    Repository, RepositoryList, // for github repos
} from '@jorgechato/manyo'
```

### `Tailwindcss` & `styles` configuration

You can inherit the tailwindcss configuration from this package.

```js
// tailwind.config.js
const tailwindConfig = require('@jorgechato/manyo/tailwind.config');


// tailwindConfig.theme.extend.colors.accent = colors.blue[600];
tailwindConfig.content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];

/** @type {import('tailwindcss').Config} */
module.exports = tailwindConfig;
```

To import the styling just add the following line wherever you want to use the styles.

```js
import '@jorgechato/manyo/dist/style/lib.css';
```

### Fonts

You can use the fonts from this package by adding either `font-logo` or `font-h1` to your element.
`<Logo />` uses the `font-logo` class, and `<h1></h1>` uses the `font-h1` class.

To modify the font you can set up the `fontFamily` in tailwind config file or the `--font-<family-name>` in your `css` file.

```js
//tailwind.config.js
module.exports = {
//...
  theme: {
//...
    extend: {
      fontFamily: {
        logo: ['logo'],
        h1: ['h1'],
      },
//...
    },
  },
};
```

```css
/* style.css */
:root {
    --font-logo: 'ui-monospace', 'SFMono-Regular';
    --font-h1: 'Menlo', 'Courier', 'monospace';
}
```

### Basic layout components

- Footer
- Header
- Logo

Some oif the components require to pass some props to work properly. This is an example of the props you need to pass to the `Header` component.

```js
info = {
TITLE: 'Jorge Chato',
SITE_MAP: [
    {
      name: 'Home',
      url: '/',
      location: 'content/home.md',
    },
    {
      name: 'Status',
      url: '/status',
    },
    {
      name: 'About',
      url: '/about',
      location: 'content/about.md',
    },
    {
      name: 'Archive',
      url: '/archive',
    },
  ],
SOCIALS: [
    {
      name: 'GitHub',
      url: 'https://github.com/jorgechato',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jorgechato',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jorgechato/',
    },
  ],
}
```

### `Readme` component

It gets the content of a markdown file and renders it as HTML.
It's required that you create a `/api/git/readme` endpoint that returns the content of a file in the repo as `string`.

### `Repository` & `RepositoryList` component

It renders a project card with a title, description, tags and a link to the repo.
It's required that you create a `/api/git/repositories` endpoint that returns the following object as an object list.

```js
export interface Repository {
    name: string;
    description: string;
    url: string;
    homepageUrl: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    };
}

// return Repository[]
```

### `Project` & `ProjectList` component

It renders a project card with a title, description, version, a link to the project...
It's part of the status page components, which means that it's going to check the health of your applications and render a status indicator.

I recommend you to have a `/api/health-check` endpoint that returns the following object in each project you want to add.

```js
export enum StatusType {
    OK = "OK",
    DEGRADED = "DEGRADED",
    MINOR = "MINOR",
    MAJOR = "MAJOR",
    MAINTENANCE = "MAINTENANCE",
    UNKNOWN = "UNKNOWN",
}

export interface Status {
    name: string;
    type: StatusType;
    url: string;
    version?: string;
    description?: string;
    color?: string;
    watching?: string;
}

// return Status
```

You will need to pass a list of project as a prop to the `ProjectList` component.
This is an example of a list of projects.

```js
projects = [
    {
      name: 'JORGE</br>CHATO',
      url: 'https://jorgechato.com/api/health-check',
    },
    {
      name: 'WHERE IS</br>JORGE TODAY?',
      url: 'https://whereisjorge.today/api/health-check',
    },
    {
      name: 'NO APTO</br>EN ASIA',
      url: 'https://noaptoen.asia/health-check.json',
    },
    {
      name: "WHAT IS JORGE</br>DOING TODAY?",
      url: '/api/health-check',
    },
  ]
```

## Improvements

- [ ] Add more components
- [ ] Add tests
- [ ] Remove next as dependency
- [ ] Fix `@` import