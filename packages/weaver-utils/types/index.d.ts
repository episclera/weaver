export interface UseScreenSize {
  isXsAndLessScreenSize: boolean
  isXsScreenSize: boolean
  isXsAndGreaterScreenSize: boolean
  isSmAndLessScreenSize: boolean
  isSmScreenSize: boolean
  isSmAndGreaterScreenSize: boolean
  isMdAndLessScreenSize: boolean
  isMdScreenSize: boolean
  isMdAndGreaterScreenSize: boolean
  isLgAndLessScreenSize: boolean
  isLgScreenSize: boolean
  isLgAndGreaterScreenSize: boolean
  isXlAndLessScreenSize: boolean
  isXlScreenSize: boolean
  isXlAndGreaterScreenSize: boolean
  isXxlAndLessScreenSize: boolean
  isXxlScreenSize: boolean
  isXxlAndGreaterScreenSize: boolean
}

// utils
export type TUseScreenSize = () => UseScreenSize
export type TIsBrowser = boolean

// main pack
export interface WeaverUtils {
  // utils
  useScreenSize: TUseScreenSize
  isBrowser: TIsBrowser
}

// package exports
// utils
export const useScreenSize: TUseScreenSize
export const isBrowser: TIsBrowser

// main pack
declare const weaverUtils: WeaverUtils

export default weaverUtils
