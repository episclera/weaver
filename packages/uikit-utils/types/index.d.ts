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
  isXsScreenSize: boolean
  isSmScreenSize: boolean
  isMdScreenSize: boolean
  isLgScreenSize: boolean
  isXlScreenSize: boolean
  isXxlScreenSize: boolean
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
export interface UikitUtils {
  // mobile detect
  DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
  DeviceDetectContext: React.Context<DeviceContext>
  useScreenSize: TUseScreenSize
  withMobileDetect: TWithMobileDetect
  // tailwind
  themeConfig: ThemeConfig
  // utils
  isBrowser: TIsBrowser
}

// package exports
// mobile detect
export const DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
export const DeviceDetectContext: React.Context<DeviceContext>
export const useScreenSize: TUseScreenSize
export const withMobileDetect: TWithMobileDetect
// tailwind
export const themeConfig: ThemeConfig
// utils
export const isBrowser: TIsBrowser

// main pack
declare const uikitUtils: UikitUtils

export default uikitUtils
