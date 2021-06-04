/* eslint-disable @typescript-eslint/no-var-requires */
const {
  commonWebpackConfig,
  packageWebpackConfig,
  mergeConfigs,
} = require('@episclera/multipack')

module.exports = mergeConfigs(commonWebpackConfig, packageWebpackConfig, {
  output: {
    library: 'weaver',
  },
  externals: {
    // Don't bundle next/link
    'next/link': 'next/link',
  },
})
