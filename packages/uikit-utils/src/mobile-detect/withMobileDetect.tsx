/* eslint-disable react/jsx-props-no-spreading, no-use-before-define */
import React from 'react'
import MobileDetect from 'mobile-detect'
import { DeviceContext, TWithMobileDetect } from '../../types'

const withMobileDetect: TWithMobileDetect = Component => {
  /* istanbul ignore next (no need to test it) */
  const WrappedComponent: any = (props: any) => <Component {...props} />

  /* istanbul ignore next (no need to test it) */
  WrappedComponent.displayName = `withMobileDetect(${
    Component.displayName || Component.name || 'Component'
  })`

  WrappedComponent.getInitialProps = async (rawContext: any) => {
    const { req } = rawContext.ctx || rawContext

    const md = new MobileDetect(
      req ? req.headers['user-agent'] : window.navigator.userAgent,
    )

    const deviceContext: DeviceContext = {
      isMobile: !!md.phone(),
      isTablet: !!md.tablet(),
      isDesktop: !md.phone() && !md.tablet(),
    }

    /* istanbul ignore next */
    let pageProps = {}
    /* istanbul ignore next */
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(rawContext)
    }

    return {
      ...pageProps,
      deviceContext,
    }
  }

  return WrappedComponent
}

export default withMobileDetect
