import { useEffect, useState, useCallback, useContext, useMemo } from 'react'
import themeConfig from '@episclera/uikit-tailwind-config'
import isBrowser from '../isBrowser'
import { DeviceDetectContext } from './DeviceDetectProvider'
import { TUseScreenSize } from '../../types'

const useScreenSize: TUseScreenSize = () => {
  const { isMobile, isTablet } = useContext(DeviceDetectContext)

  const themeScreenSizes = useMemo(
    () => ({
      xs: Number(`${themeConfig.theme.screens.xs.max}`.replace(/\D/g, '')),
      sm: Number(`${themeConfig.theme.screens.sm}`.replace(/\D/g, '')),
      md: Number(`${themeConfig.theme.screens.md}`.replace(/\D/g, '')),
      lg: Number(`${themeConfig.theme.screens.lg}`.replace(/\D/g, '')),
      xl: Number(`${themeConfig.theme.screens.xl}`.replace(/\D/g, '')),
      xxl: Number(`${themeConfig.theme.screens.xxl}`.replace(/\D/g, '')),
    }),
    [],
  )

  /* istanbul ignore next (because we need a Request from browser to node env to fully test it) */
  const guessedSizeFromDeviceContext = useMemo(() => {
    if (isMobile) return themeScreenSizes.xs - 1 // decrease 1 unit because "isXsScreenSize" is calculated bellow using "<" symbol but not "<="
    if (isTablet) return themeScreenSizes.md

    return themeScreenSizes.lg
  }, [isMobile, isTablet])

  /* istanbul ignore next (because we need a Request from browser to node env to fully test it) */
  const getScreenSize = useCallback(
    () => (isBrowser ? window.innerWidth : guessedSizeFromDeviceContext),
    [guessedSizeFromDeviceContext],
  )

  const [screenSize, setScreenSize] = useState(getScreenSize())

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSize())
  }, [getScreenSize])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isXsScreenSize: screenSize < themeScreenSizes.xs,
    isSmScreenSize:
      screenSize >= themeScreenSizes.sm && screenSize < themeScreenSizes.md,
    isMdScreenSize:
      screenSize >= themeScreenSizes.md && screenSize < themeScreenSizes.lg,
    isLgScreenSize:
      screenSize >= themeScreenSizes.lg && screenSize < themeScreenSizes.xl,
    isXlScreenSize:
      screenSize >= themeScreenSizes.xl && screenSize < themeScreenSizes.xxl,
    isXxlScreenSize: screenSize >= themeScreenSizes.xxl,
  }
}

export default useScreenSize
