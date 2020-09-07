const {
  commonWebpackConfig,
  packageWebpackConfig,
  uiPackageWebpackConfig,
} = require('@episclera/webpack-config')
const { mergeConfigs } = require('@episclera/toolkit-utils')

module.exports = mergeConfigs(
  commonWebpackConfig,
  packageWebpackConfig,
  uiPackageWebpackConfig,
  {
    output: {
      library: 'uikit',
    },
  },
)
