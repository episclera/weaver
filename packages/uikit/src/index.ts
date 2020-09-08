/* istanbul ignore file */
import uikitTailwindConfig from '@episclera/uikit-tailwind-config'
import { toNumber } from '@episclera/uikit-utils'
import { Uikit } from '../types'

const uikit: Uikit = {
  // tailwind
  uikitTailwindConfig,
  // utils
  toNumber,
}

export { toNumber, uikitTailwindConfig }
export default uikit
