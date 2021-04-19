/* istanbul ignore file */
import { red, gold, green, blue } from '@ant-design/colors'
import { WeaverTailwindConfig } from '../types'

/* istanbul ignore next */
const weaverTailwindConfig: WeaverTailwindConfig = {
  important: true, // add !important for all classes.This can be really useful when using Tailwind with existing CSS that has high specificity selectors.
  mode: 'jit',
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // NOTE: colors should be same as in ant-design default theme https://github.com/ant-design/ant-design/blob/0e4360038e79c7bd8bc7eb33dc56b7d0ccd481c4/components/style/themes/default.less
        'primary-color': blue.primary,
        'success-color': green.primary,
        'warning-color': gold.primary,
        'error-color': red[4],
        color: 'rgba(0, 0, 0, 0.85)', // base text color
        'color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
        'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
      },
    },
    container: {
      center: true, // To center containers
    },
    screens: {
      // NOTE: breakpoints should be same as in ant-design default theme https://github.com/ant-design/ant-design/blob/0e4360038e79c7bd8bc7eb33dc56b7d0ccd481c4/components/style/themes/default.less
      xs: { max: '576px' }, // < 576
      sm: '576px', // >= 576
      md: '768px', // >=768
      lg: '992px', // >=992
      xl: '1200px', // >=1200
      xxl: '1600px', // >=1600
    },
  },
}

/* istanbul ignore next */
export default weaverTailwindConfig
