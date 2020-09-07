<div align="center">
  <a href="https://episclera.github.io/uikit/">
  <img style="max-width:100%;" height="200"
    src="https://raw.githubusercontent.com/episclera/uikit/master/logo.png">
  </a>
  <h1>
      uikit
  </h1>
  <p> 🐜UI library meant to provide a way to share common UI components through all Episclera projects. Uses under the hood Ant-Design components. </p>
  <p>
    <a href="https://episclera.github.io/uikit/">Site</a>
    | <a href="https://episclera.github.io/uikit/docs/doc-introduction">Getting Started</a>
    | <a href="https://episclera.github.io/uikit/docs/doc-api-introduction">API</a>
    | <a href="https://episclera.github.io/uikit/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/episclera/uikit)](https://github.com/episclera/uikit/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-episclera%2Fmultipack-green)](https://github.com/episclera/multipack)

## Features

- `Lerna` structure to build monorepo packages
- `ESLint` and `Prettier` to enforce code style.
- Pre-commit hooks with `husky` and `lint-staged`
- `Docusaurus` docs generator preconfigured to work well with `Github Pages`
- Preconfigured `Jest` and `react-testing-library` to test `(ts|tsx)` files and colect coverage from all packages
- Preconfigured `Github workflow actions` to run tests after each pushed commit

## Getting started.

- Clone the project: `git clone --depth=1 https://github.com/episclera/uikit.git <YOUR_PROJECT_NAME>`
- Setup project: `npm install`

Running `npm run link:packages` will installing all packages dependencies and linking any cross-dependencies. This command is crucial, as it allows you to use your package names in `require()` as if the packages were already existing and available in your `node_modules` folder.

## Publishing

To build and publish your packages you just need to run: `npm run publish:packages`

This will run the build script and then publish your packages. It is currently set to publish each package individually so that their versions are independent.

## CLI Commands

`npm run build:packages` - build all packages with `webpack` in `production` mode

`npm run watch:packages` - start `webpack` in watch mode to rebuild packages on each change

`npm run publish:packages` - publish all packages in package registry (npm, yarn ...)

`npm run link:packages` - will installing all packages dependencies and linking any cross-dependencies in each package

`npm run test:packages` - run `jest` tests in each package and colect coverage from all packages

`npm run watch:test:packages` - run and watch all tests for changes

`npm run lint:packages` - lint all packages

`npm run fix:packages` - lint and fix all packages

`npm run start:docs` - start a [Docusaurus](https://docusaurus.io/) server that serve files from `/docs` folder predestinated for docs.

`npm run publish:docs` - publish generated docs with [Docusaurus](https://docusaurus.io/) to `Github Pages`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/episclera/)

[![Open Collective](https://opencollective.com/episclera/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/episclera/)

## Author

**[@episclera/uikit](https://github.com/episclera/uikit)** © [Episclera](https://github.com/episclera), Released under the [MIT](https://github.com/episclera/uikit/blob/master/LICENSE) License.<br>
Authored and maintained by Episclera with help from contributors ([list](https://github.com/episclera/uikit/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/episclera/uikit)
