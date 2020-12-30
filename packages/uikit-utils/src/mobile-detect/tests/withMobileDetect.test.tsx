/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-floating-promises, @typescript-eslint/ban-ts-comment */
import React from 'react'
import { NextComponent } from '../../../types'
import withMobileDetect from '../withMobileDetect'

const userAgents = {
  chromeMobile:
    'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>',
  chromeTablet:
    'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev>(KHTML, like Gecko) Chrome/<Chrome Rev> Safari/<WebKit Rev>',
  chromeDesktop:
    'Mozilla/5.0 (X11; HasCodingOs 1.0; Linux x64) AppleWebKit/637.36 (KHTML, like Gecko) Chrome/70.0.3112.101 Safari/637.36 HasBrowser/5.0',
}
// @ts-ignore
const TestComponent: NextComponent = () => <div />
TestComponent.getInitialProps = () =>
  new Promise(resolve => resolve({ testProp: true }))

describe('withMobileDetect', () => {
  it('should detect correct device from window navigator user-agent if no request provided', () => {
    expect.assertions(3)

    const withMobileDetectComponent = withMobileDetect(TestComponent)

    Object.defineProperty(global.window.navigator, 'userAgent', {
      value: userAgents.chromeMobile,
      writable: true,
    })

    withMobileDetectComponent.getInitialProps({}).then(props => {
      expect(props.deviceContext.isMobile).toBeTruthy()
    })

    Object.defineProperty(global.window.navigator, 'userAgent', {
      value: userAgents.chromeTablet,
      writable: true,
    })

    withMobileDetectComponent.getInitialProps({}).then(props => {
      expect(props.deviceContext.isTablet).toBeTruthy()
    })

    Object.defineProperty(global.window.navigator, 'userAgent', {
      value: userAgents.chromeDesktop,
      writable: true,
    })

    withMobileDetectComponent.getInitialProps({}).then(props => {
      expect(props.deviceContext.isDesktop).toBeTruthy()
    })
  })

  it('should detect correct device from provided (different request format) user agent header', () => {
    expect.assertions(3)

    const withMobileDetectComponent = withMobileDetect(TestComponent)

    withMobileDetectComponent
      .getInitialProps({
        ctx: {
          req: {
            headers: {
              'user-agent': userAgents.chromeMobile,
            },
          },
        },
      })
      .then(props => {
        expect(props.deviceContext.isMobile).toBeTruthy()
      })

    withMobileDetectComponent
      .getInitialProps({
        req: {
          headers: {
            'user-agent': userAgents.chromeTablet,
          },
        },
      })
      .then(props => {
        expect(props.deviceContext.isTablet).toBeTruthy()
      })

    withMobileDetectComponent
      .getInitialProps({
        req: {
          headers: {
            'user-agent': userAgents.chromeDesktop,
          },
        },
      })
      .then(props => {
        expect(props.deviceContext.isDesktop).toBeTruthy()
      })
  })

  it('should correct re-implement getInitialProps method and merge component props with device detect props', () => {
    expect.assertions(2)

    const withMobileDetectComponent = withMobileDetect(TestComponent)

    withMobileDetectComponent
      .getInitialProps({
        req: {
          headers: {
            'user-agent': userAgents.chromeMobile,
          },
        },
      })
      .then(props => {
        expect(props).toHaveProperty('deviceContext')
        expect(props).toHaveProperty('testProp')
      })
  })
})
