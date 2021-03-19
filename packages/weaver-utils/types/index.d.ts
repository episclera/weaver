import React from 'react'

// mobile detect
export interface DeviceContext {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export interface DeviceDetectProviderProps {
  deviceContext: DeviceContext
  children: React.ReactNode
}

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

export type TUseScreenSize = () => UseScreenSize

export type TGetInitialProps = (arg: any) => Promise<any>

export interface NextComponent
  extends React.ComponentClass,
    React.FunctionComponent {
  getInitialProps: TGetInitialProps
}

export type TWithMobileDetect = (Component: NextComponent) => NextComponent

// tailwind
export interface ThemeConfig {
  [key: string]: any
}

// utils
export type TIsBrowser = boolean

// main pack
export interface WeaverUtils {
  // mobile detect
  DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
  DeviceDetectContext: React.Context<DeviceContext>
  useScreenSize: TUseScreenSize
  withMobileDetect: TWithMobileDetect
  // utils
  isBrowser: TIsBrowser
}

// package exports
// mobile detect
export const DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
export const DeviceDetectContext: React.Context<DeviceContext>
export const useScreenSize: TUseScreenSize
export const withMobileDetect: TWithMobileDetect
// utils
export const isBrowser: TIsBrowser

// main pack
declare const weaverUtils: WeaverUtils

export default weaverUtils
