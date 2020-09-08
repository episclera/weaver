import { UikitTailwindConfig } from '@episclera/uikit-tailwind-config'
import { TToNumber } from '@episclera/uikit-utils'

export interface Uikit {
  // tailwind
  uikitTailwindConfig: UikitTailwindConfig
  // utils
  toNumber: TToNumber
}

// package exports
// tailwind
export const uikitTailwindConfig: UikitTailwindConfig
// utils
export const toNumber: TToNumber

declare const uikit: Uikit

export default uikit
