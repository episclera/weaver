/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment,  @typescript-eslint/no-var-requires */
const {
  commonWebpackConfig,
  packageWebpackConfig,
  mergeConfigs,
} = require('@episclera/multipack')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = mergeConfigs(commonWebpackConfig, packageWebpackConfig, {
  output: {
    library: 'weaver',
  },
  /**
   * Using AntdDayjsWebpackPlugin to replace default Antd moment.js with dayjs because the last has
   * a small size but the same api and is maintained by theirs collaborators
   */
  plugins: [new AntdDayjsWebpackPlugin()],
  externals: {
    /**
     * Don't bundling these packages because these packages will be used as a peerDependencies and
     * imported from the client which should install these by himself.
     *
     * Thats needed to avoid multiple versions of these packages in the same client bundle.
     */
    'next/link': 'next/link',
    dayjs: 'dayjs',
  },
})
