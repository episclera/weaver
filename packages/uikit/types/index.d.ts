import { TToNumber } from '@episclera/uikit-utils'

export interface Uikit {
  toNumber: TToNumber
}

// package exports
export const toNumber: TToNumber

declare const uikit: Uikit

export default uikit
