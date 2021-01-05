<div align="center">
  <a href="https://episclera.github.io/uikit/">
  <img style="max-width:100%;" height="200"
    src="https://raw.githubusercontent.com/episclera/uikit/master/logo.png">
  </a>
  <h1>
      uikit
  </h1>
  <p> 🐜UI library meant to provide a way to share common UI components through all Episclera projects. Uses under the hood Ant-Design components and TailwindCSS. </p>
  <p>
    <a href="https://episclera.github.io/uikit/">Site</a>
    | <a href="https://episclera.github.io/uikit/docs/doc-introduction">Getting Started</a>
    | <a href="https://episclera.github.io/uikit/docs/doc-api-introduction">API</a>
    | <a href="https://episclera.github.io/uikit/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/episclera/uikit)](https://github.com/episclera/uikit/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-episclera%2Fmultipack-green)](https://github.com/episclera/multipack)

## Usage

Install: `npm i @episclera/uikit`

1. Then in your main layout file (\_app.tsx) you need to import preconfigured style files

**NOTE**: TailwindCSS utils are also included in this file so no need to import something else.

```js
import '@episclera/uikit/styles/main.less'
```

2. Then in your main layout file (\_app.tsx) you need to wrapp the entire app in (COnfigProvider and DeviceDetectProvider)

```jsx
import { withMobileDetect, DeviceDetectProvider } from '@episclera/uikit'

const App = ({ Component, pageProps, deviceContext }) => (
  <ConfigProvider>
    <DeviceDetectProvider deviceContext={deviceContext}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DeviceDetectProvider>
  </ConfigProvider>
)

App.getInitialProps = async appContext =>
  await NextApp.getInitialProps(appContext)

export default withMobileDetect(App)
```

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
