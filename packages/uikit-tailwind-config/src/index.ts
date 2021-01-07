// TODO: find a way to import vars less file here and use variables from there
// TODO: remove unused properties

/* istanbul ignore file */
import { UikitTailwindConfig } from '../types'

/* istanbul ignore next */
const uikitTailwindConfig: UikitTailwindConfig = {
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
      // brand colors property names (+ TW prefixes) (should be same as in ant-design)
      'primary-color': '#6398de', // primary color for all components
      'link-color': '#1890ff', // link color
      'success-color': '#52c41a', // success state color
      'warning-color': '#faad14', // warning state color
      'error-color': '#f5222d', // error state color
      'heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
      color: 'rgba(0, 0, 0, 0.65)', // base text color
      'color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
      'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
      'border-color-base': '#d9d9d9', // base border color
      // adding few default colors utils
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      black: 'black',
    },
    extend: {
      spacing: {
        'pxl-60': '60px',
        'pxl-100': '100px',
        'pxl-150': '150px',
        'pxl-200': '200px',
        'pxl-250': '250px',
      },
      minHeight: {
        '11/12-screen': '90vh',
        '1/2-screen': '50vh',
      },
      maxHeight: {
        '11/12-screen': '90vh',
        '4/5-screen': '80vh',
        '3/4-screen': '75vh',
        '3/5-screen': '60vh',
        '1/2-screen': '50vh',
      },
    },
    container: {
      center: true, // To center containers
    },
    screens: {
      // breakpoints (should be same as in ant design grid system)
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
export default uikitTailwindConfig
