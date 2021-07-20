/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState, useCallback, useMemo } from 'react'
import { weaverTheme } from '@episclera/weaver-theme'
import isBrowser from './isBrowser'
import { TUseScreenSize } from '../types'

const useScreenSize: TUseScreenSize = () => {
  const themeScreenSizes = useMemo(
    () => ({
      xs: Number(`${weaverTheme('screen-xs')}`.replace(/\D/g, '')),
      sm: Number(`${weaverTheme('screen-sm')}`.replace(/\D/g, '')),
      md: Number(`${weaverTheme('screen-md')}`.replace(/\D/g, '')),
      lg: Number(`${weaverTheme('screen-lg')}`.replace(/\D/g, '')),
      xl: Number(`${weaverTheme('screen-xl')}`.replace(/\D/g, '')),
      xxl: Number(`${weaverTheme('screen-xxl')}`.replace(/\D/g, '')),
    }),
    [],
  )

  /**
   * Fallback to XS screen sizes if window is not defined
   */
  /* istanbul ignore next */
  const getScreenSize = useCallback(
    () => (isBrowser ? window.innerWidth : themeScreenSizes.xs),
    [themeScreenSizes],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const boolRepresentationsOfScreenSizes = useMemo(
    () => ({
      isXsAndLessScreenSize: screenSize < themeScreenSizes.sm,
      isXsScreenSize:
        screenSize >= themeScreenSizes.xs && screenSize < themeScreenSizes.sm,
      isXsAndGreaterScreenSize: screenSize >= themeScreenSizes.xs,
      isSmAndLessScreenSize: screenSize < themeScreenSizes.md,
      isSmScreenSize:
        screenSize >= themeScreenSizes.sm && screenSize < themeScreenSizes.md,
      isSmAndGreaterScreenSize: screenSize >= themeScreenSizes.sm,
      isMdAndLessScreenSize: screenSize < themeScreenSizes.lg,
      isMdScreenSize:
        screenSize >= themeScreenSizes.md && screenSize < themeScreenSizes.lg,
      isMdAndGreaterScreenSize: screenSize >= themeScreenSizes.md,
      isLgAndLessScreenSize: screenSize < themeScreenSizes.xl,
      isLgScreenSize:
        screenSize >= themeScreenSizes.lg && screenSize < themeScreenSizes.xl,
      isLgAndGreaterScreenSize: screenSize >= themeScreenSizes.lg,
      isXlAndLessScreenSize: screenSize < themeScreenSizes.xxl,
      isXlScreenSize:
        screenSize >= themeScreenSizes.xl && screenSize < themeScreenSizes.xxl,
      isXlAndGreaterScreenSize: screenSize >= themeScreenSizes.xl,
      isXxlAndLessScreenSize: screenSize < Number.MAX_SAFE_INTEGER,
      isXxlScreenSize: screenSize >= themeScreenSizes.xxl,
      isXxlAndGreaterScreenSize: screenSize >= themeScreenSizes.xxl,
    }),
    [screenSize, themeScreenSizes],
  )

  return boolRepresentationsOfScreenSizes
}

export default useScreenSize
