/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
/* istanbul ignore file */
import { weaverTheme, WeaverThemeConfig } from '@episclera/weaver-theme'
import { WeaverTailwindConfig } from '../types'

const {
  colors,
  screens,
  boxShadow,
  borderRadius,
} = weaverTheme() as WeaverThemeConfig
/* istanbul ignore next */
const weaverTailwindConfig: WeaverTailwindConfig = {
  important: true, // add !important for all classes.This can be really useful when using Tailwind with existing CSS that has high specificity selectors.
  mode: 'jit',
  purge: [
    // default purge set for next.js like folder structure
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: { colors, boxShadow, borderRadius },
    container: {
      center: true, // To center containers
    },
    screens: Object.entries(screens).reduce((acc, [key, value]) => {
      return { ...acc, [key.replace('screen-', '')]: value }
    }, {}),
  },
}

/* istanbul ignore next */
export default weaverTailwindConfig
