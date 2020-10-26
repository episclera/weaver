/* eslint-disable import/no-extraneous-dependencies, no-use-before-define, react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
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
  // set size to mobile one
  global.innerWidth =
    Number(`${themeConfig.theme.screens.xs.max}`.replace(/\D/g, '')) - 1 // decrease 1 unit because "isXsScreenSize" is calculated bellow using "<" symbol but not "<="
  global.dispatchEvent(new Event('resize'))
})

describe('DeviceDetectProvider', () => {
  it('should provide device context and set isXsScreenSize to true', () => {
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
