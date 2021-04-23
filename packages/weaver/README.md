<div align="center">
  <a href="https://episclera.github.io/weaver/">
  <img style="max-width:100%;" height="200"
    src="https://raw.githubusercontent.com/episclera/weaver/master/logo.svg">
  </a>
  <h1>
      weaver
  </h1>
  <p> 🐜 Enjoyable UI library. </p>
  <p>
    <a href="https://episclera.github.io/weaver/">Site</a>
    | <a href="https://episclera.github.io/weaver/docs/doc-introduction">Getting Started</a>
    | <a href="https://episclera.github.io/weaver/docs/doc-api-introduction">API</a>
    | <a href="https://episclera.github.io/weaver/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/episclera/weaver)](https://github.com/episclera/weaver/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-episclera%2Fmultipack-green)](https://github.com/episclera/multipack)

## Usage

Install: `npm i @episclera/weaver`

1. Then in your main layout file (\_app.tsx) you need to import preconfigured style files

```js
import '@episclera/weaver/styles/main.less'
import '@episclera/weaver/styles/tailwind.css'
```

2. Then in your main layout file (\_app.tsx) you need to wrapp the entire app in (COnfigProvider and DeviceDetectProvider)

```jsx
import { withMobileDetect, DeviceDetectProvider } from '@episclera/weaver'

const App = ({ Component, pageProps, deviceContext }) => (
  <ConfigProvider>
    <DeviceDetectProvider deviceContext={deviceContext}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </DeviceDetectProvider>
  </ConfigProvider>
)

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

**[@episclera/weaver](https://github.com/episclera/weaver)** © [Episclera](https://github.com/episclera), Released under the [MIT](https://github.com/episclera/weaver/blob/master/LICENSE) License.<br>
Authored and maintained by Episclera with help from contributors ([list](https://github.com/episclera/weaver/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/episclera/weaver)
