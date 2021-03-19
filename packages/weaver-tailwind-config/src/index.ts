/* istanbul ignore file */
import { red, gold, green, blue } from '@ant-design/colors'
import { WeaverTailwindConfig } from '../types'

/* istanbul ignore next */
const weaverTailwindConfig: WeaverTailwindConfig = {
  important: true, // add !important for all classes.This can be really useful when using Tailwind with existing CSS that has high specificity selectors.
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    container: [], // Disabling responsive variants for Performance reasons.
  },
  corePlugins: {
    // Disabling few plugins for Performance reasons and because are unused.
    // layout utils
    float: false,
    clear: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridAutoFlow: false,
    gridTemplateRows: false,
    gridAutoRows: false,
    gridAutoColumns: false,
    gap: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    // typography utils
    fontFamily: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    placeholderColor: false,
    placeholderOpacity: false,
    textOpacity: false,
    // background utils
    backgroundClip: false,
    // borders utils
    borderOpacity: false,
    // tables utils
    borderCollapse: false,
    tableLayout: false,
    // interactivity utils
    appearance: false,
    resize: false,
    userSelect: false,
    // accessibility utils
    accessibility: false,
  },
  theme: {
    colors: {
      // Replacing default (BIG TW) color palette, cause' of big bundle size
      // NOTE: colors should be same as in ant-design default theme https://github.com/ant-design/ant-design/blob/0e4360038e79c7bd8bc7eb33dc56b7d0ccd481c4/components/style/themes/default.less
      'primary-color': blue.primary,
      'success-color': green.primary,
      'warning-color': gold.primary,
      'error-color': red[4],
      color: 'rgba(0, 0, 0, 0.65)', // base text color
      'color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
      'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
      // adding few default colors utils
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
    },
    extend: {
      spacing: {
        'pxl-60': '60px',
        'pxl-150': '150px',
      },
      minHeight: {
        '11/12-screen': '90vh',
      },
      maxHeight: {
        '3/5-screen': '60vh',
        '1/2-screen': '50vh',
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
