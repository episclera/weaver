const {
  commonJestConfig,
  monorepoJestConfig,
  mergeConfigs,
} = require('@episclera/toolkit')

module.exports = mergeConfigs(commonJestConfig, monorepoJestConfig)
