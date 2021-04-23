/* istanbul ignore file */
import weaverTheme from './weaverTheme'
import weaverThemeConfig from './weaverThemeConfig'
import weaverThemePluginLess from './weaverThemePluginLess'
import { WeaverThemeMain } from '../types'

/* istanbul ignore next */
const weaverThemeMain: WeaverThemeMain = {
  weaverTheme,
  weaverThemeConfig,
  weaverThemePluginLess,
}

/* istanbul ignore next */
export { weaverTheme, weaverThemeConfig, weaverThemePluginLess }
/* istanbul ignore next */
export default weaverThemeMain
