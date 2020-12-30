/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/ban-types */
import React from 'react'
import { act, render } from '@testing-library/react'
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

describe('DeviceDetectProvider', () => {
  it('should provide device context and re-provide this context with new values when window is resized', () => {
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

    expect(isGuessedScreenSizeXs).toBeFalsy()

    act(() => {
      // set size to extra small mobile one
      global.innerWidth =
        Number(`${themeConfig.theme.screens.xs.max}`.replace(/\D/g, '')) - 1 // decrease 1 unit because "isXsScreenSize" is calculated bellow using "<" symbol but not "<="
      global.dispatchEvent(new Event('resize'))
    })

    expect(isGuessedScreenSizeXs).toBeTruthy()
  })
})
