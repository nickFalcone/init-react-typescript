# React TypeScript Template

These are the tools and libraries I reach for when creating a new frontend React project.

To use this template, follow the steps below to create a new repository.

Feedback and pull requests to the template are also welcomed.

## Highlights

- [Vite](https://vitejs.dev/blog/announcing-vite4.html) v4
- [React](https://reactjs.org/blog/2022/03/29/react-v18.html) v18
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) v4
- [React Query Library](https://react-query.tanstack.com/) v4 (using [Mock Service Worker](https://mswjs.io/) to test React Query hooks)
- [Styled Components](https://styled-components.com/) v5
- Pre-commit lint and test hooks

The project uses Yarn 3. You can remove unwanted packages with [yarn remove](https://classic.yarnpkg.com/lang/en/docs/cli/remove/#toc-yarn-remove).

## Use

Follow steps for [creating a new repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

![use template button](https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png)

Clone the new repository:

```bash
git clone git@github.com:yourName/whatcha-gonna-call-it.git
```

Install:

```bash
cd whatcha-gonna-call-it
yarn install
```

## Start

Run locally:

```bash
yarn start
```

## Test

Runs tests with Jest, RTL, and MSW support.

```bash
yarn test
```

## Build

Create a production build to `dist/`:

```bash
yarn build
yarn serve # preview the build
```

## Acknowledgements

Forked from [TheSwordBreaker/vite-reactts-eslint-prettier](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier)
