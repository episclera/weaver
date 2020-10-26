/* eslint-disable import/no-extraneous-dependencies, no-use-before-define, react/jsx-props-no-spreading */
import React from 'react'
import { render, act } from '@testing-library/react'
import themeConfig from '@episclera/uikit-tailwind-config'
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
      isXsScreenSize: false,
      isSmScreenSize: false,
      isMdScreenSize: false,
      isLgScreenSize: false,
      isXlScreenSize: false,
      isXxlScreenSize: false,
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

    expect(guessedScreenSizes.isXsScreenSize).toBeTruthy()

    act(() => {
      // set size to small mobile one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.sm}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(guessedScreenSizes.isSmScreenSize).toBeTruthy()

    act(() => {
      // set size to medium one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.md}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(guessedScreenSizes.isMdScreenSize).toBeTruthy()

    act(() => {
      // set size to large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.lg}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(guessedScreenSizes.isLgScreenSize).toBeTruthy()

    act(() => {
      // set size to extra large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.xl}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(guessedScreenSizes.isXlScreenSize).toBeTruthy()

    act(() => {
      // set size to 2x extra large one
      global.innerWidth = Number(
        `${themeConfig.theme.screens.xxl}`.replace(/\D/g, ''),
      )
      global.dispatchEvent(new Event('resize'))
    })

    expect(guessedScreenSizes.isXxlScreenSize).toBeTruthy()
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
