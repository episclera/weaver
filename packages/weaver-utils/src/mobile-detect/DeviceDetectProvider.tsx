/* eslint-disable no-use-before-define */
import React, { createContext } from 'react'
import { DeviceDetectProviderProps } from '../../types'

export const DeviceDetectContext = createContext({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
})

const DeviceDetectProvider: React.FC<DeviceDetectProviderProps> = ({
  children,
  deviceContext,
}: DeviceDetectProviderProps) => (
  <DeviceDetectContext.Provider value={deviceContext}>
    {children}
  </DeviceDetectContext.Provider>
)

export default DeviceDetectProvider
