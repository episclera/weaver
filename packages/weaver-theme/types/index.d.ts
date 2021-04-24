export interface WeaverUnFlattenConfig {
  [key: string]: string
}

export interface WeaverThemeConfig {
  colors: WeaverUnFlattenConfig
  boxShadow: WeaverUnFlattenConfig
  borderRadius: WeaverUnFlattenConfig
  screens: WeaverUnFlattenConfig
}

export type TWeaverTheme = (val?: string) => string | WeaverThemeConfig

export interface WeaverThemePluginLess {
  install: (
    less: any,
    pluginManager: any,
    functions: {
      add: (
        name: string,
        pluginMethod: (node?: { value?: string }) => string,
      ) => any
    },
  ) => void
}

export interface WeaverThemeMain {
  weaverThemeConfig: WeaverThemeConfig
  weaverTheme: TWeaverTheme
  weaverThemePluginLess: WeaverThemePluginLess
}

// package exports
export const weaverThemeConfig: WeaverThemeConfig
export const weaverTheme: TWeaverTheme
export const weaverThemePluginLess: WeaverThemePluginLess
// main pack
declare const weaverThemeMain: WeaverThemeMain

export default weaverThemeMain
