/* istanbul ignore file */
import DeviceDetectProvider, {
  DeviceDetectContext,
} from './mobile-detect/DeviceDetectProvider'
import useScreenSize from './mobile-detect/useScreenSize'
import withMobileDetect from './mobile-detect/withMobileDetect'
import isBrowser from './isBrowser'
import { WeaverUtils } from '../types'

const weaverUtils: WeaverUtils = {
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export {
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export default weaverUtils
