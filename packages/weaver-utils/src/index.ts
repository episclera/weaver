/* istanbul ignore file */
import isBrowser from './isBrowser'
import useScreenSize from './useScreenSize'
import { WeaverUtils } from '../types'

const weaverUtils: WeaverUtils = {
  // utils
  useScreenSize,
  isBrowser,
}

export {
  // utils
  useScreenSize,
  isBrowser,
}

export default weaverUtils
