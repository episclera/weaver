/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-types */
import React from 'react'
import { render, act } from '@testing-library/react'
import themeConfig from '@episclera/weaver-tailwind-config'
import DeviceDetectProvider from '../DeviceDetectProvider'
import useScreenSize from '../useScreenSize'
import { DeviceContext } from '../../../types'

let mocKProps = {}

beforeEach(() => {
  mocKProps = {
    deviceContext: {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    },
  }
})

describe('useScreenSize', () => {
  it('should re-calculate screen size on every window resize and return correct guessed screen size', () => {
    let guessedScreenSizes = {
      isXsAndLessScreenSize: false,
      isXsScreenSize: false,
      isXsAndGreaterScreenSize: false,
      isSmAndLessScreenSize: false,
      isSmScreenSize: false,
      isSmAndGreaterScreenSize: false,
      isMdAndLessScreenSize: false,
      isMdScreenSize: false,
      isMdAndGreaterScreenSize: false,
      isLgAndLessScreenSize: false,
      isLgScreenSize: false,
      isLgAndGreaterScreenSize: false,
      isXlAndLessScreenSize: false,
      isXlScreenSize: false,
      isXlAndGreaterScreenSize: false,
      isXxlAndLessScreenSize: false,
      isXxlScreenSize: false,
      isXxlAndGreaterScreenSize: false,
    }
    const Component: React.FC<{}> = () => {
      const screenSizeContext = useScreenSize()
      guessedScreenSizes = screenSizeContext
      return <div />
    }

    render(
      <DeviceDetectProvider
        {...(mocKProps as { deviceContext: DeviceContext })}
      >
        <Component />
      </DeviceDetectProvider>,
    )

    act(() => {
      // set size to extra small mobile one
      global.innerWidth =
        Number(`${themeConfig.theme.screens.xs.max}`.replace(/\D/g, '')) - 1 // decrease 1 unit because "isXsScreenSize" is calculated bellow using "<" symbol but not "<="
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isXsAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isXsScreenSize).toBeTruthy()
    // test greater screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()

    act(() => {
      // set size to small mobile one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.sm}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isSmAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isSmScreenSize).toBeTruthy()
    // test greater screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndGreaterScreenSize).toBeTruthy()

    act(() => {
      // set size to medium one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.md}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isMdAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isMdScreenSize).toBeTruthy()
    // test greater screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndGreaterScreenSize).toBeTruthy()

    act(() => {
      // set size to large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.lg}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndGreaterScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isLgScreenSize).toBeTruthy()
    // descenders
    expect(guessedScreenSizes.isLgAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()

    act(() => {
      // set size to extra large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.xl}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isXlAndLessScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isXlScreenSize).toBeTruthy()
    // test greater screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndGreaterScreenSize).toBeTruthy()

    act(() => {
      // set size to 2x extra large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.xxl}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    // test less or equal screen sizes
    expect(guessedScreenSizes.isXxlAndLessScreenSize).toBeTruthy()
    // test equal screen sizes
    expect(guessedScreenSizes.isXxlScreenSize).toBeTruthy()
    // test greater screen sizes
    expect(guessedScreenSizes.isXsAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isSmAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isMdAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isLgAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXlAndGreaterScreenSize).toBeTruthy()
    expect(guessedScreenSizes.isXxlAndGreaterScreenSize).toBeTruthy()
  })

  it('should set correct initial screen size', () => {
    // set size to extra small mobile one
    global.innerWidth =
      Number(`${themeConfig.theme.screens.xs.max}`.replace(/\D/g, '')) - 1 // decrease 1 unit because "isXsScreenSize" is calculated bellow using "<" symbol but not "<="
    global.dispatchEvent(new Event('resize'))

    let isGuessedScreenSizeXs = false
    const Component: React.FC<{}> = () => {
      const { isXsScreenSize } = useScreenSize()
      isGuessedScreenSizeXs = isXsScreenSize
      return <div />
    }

    render(
      <DeviceDetectProvider
        {...(mocKProps as { deviceContext: DeviceContext })}
      >
        <Component />
      </DeviceDetectProvider>,
    )

    expect(isGuessedScreenSizeXs).toBeTruthy()
  })
})
