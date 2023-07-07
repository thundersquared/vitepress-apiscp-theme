# ApisCP VitePress Theme

This is the [VitePress](https://vitepress.vuejs.org/) theme for the
documentation at [notes.apiscp.com](https://notes.apiscp.com/).

## Development Setup

This repo can be developed on its own since it is a self-contained VitePress
theme. Make sure to use [yarn](https://yarnpkg.com/) as the package manager when
installing deps. A demo app is available in `/demo` and can be run with
`yarn dev`:

```bash
yarn install
yarn dev
```

### Available Scripts

Here is the list of available scripts that can be used during the development.

```bash
# Boot local dev server.
$ yarn dev

# Build demo, then serve locally. This is for testing
# production build in the local environment.
$ yarn serve

# Run lint via Prettier.
$ yarn lint

# Run type check via tsc.
$ yarn type
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2023 Anatoli Nicolae and contributors.
