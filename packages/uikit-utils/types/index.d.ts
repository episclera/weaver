export type TToNumber = (value?: string | number) => number

export interface UikitUtils {
  toNumber: TToNumber
}

// package exports
export const toNumber: TToNumber

declare const uikitUtils: UikitUtils

export default uikitUtils
