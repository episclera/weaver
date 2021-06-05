import weaverTheme from './weaverTheme'
import { WeaverThemePluginLess, WeaverUnFlattenConfig } from '../types'

const weaverThemePluginLess: WeaverThemePluginLess = {
  install: (_less, _pluginManager, functions) => {
    functions.add('weaverTheme', arg => {
      if (arg && arg.value) {
        return weaverTheme(arg.value) as string
      }

      const unFlattenConfig = Object.values(weaverTheme()).reduce(
        (acc: WeaverUnFlattenConfig, nextVal: WeaverUnFlattenConfig) => ({
          ...acc,
          ...nextVal,
        }),
        {},
      ) as WeaverUnFlattenConfig

      return Object.entries(unFlattenConfig).reduce((acc, [key, value]) => {
        return `
          ${acc}
          @${key}: ${value};
        `
      }, '')
    })
  },
}

export default weaverThemePluginLess
