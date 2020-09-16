/* istanbul ignore file */
import uikitTailwindConfig from '@episclera/uikit-tailwind-config'
import {
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  themeConfig,
  isBrowser,
} from '@episclera/uikit-utils'
import { Uikit } from '../types'

const uikit: Uikit = {
  // tailwind
  uikitTailwindConfig, // raw config
  themeConfig, // resolved with tailwind utils
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export {
  // tailwind
  uikitTailwindConfig, // raw config
  themeConfig, // resolved with tailwind utils
  // mobile detect
  DeviceDetectProvider,
  DeviceDetectContext,
  useScreenSize,
  withMobileDetect,
  // utils
  isBrowser,
}

export default uikit
