import React from 'react'
import { Typography } from 'antd'
import NextLink from 'next/link'
import { TLink, LinkProps } from '../types'

/**
 * Link component created using next/link as router and antd-link as DOM styled element
 */
const Link: TLink = ({
  children,
  typographyLinkProps = {},
  ...rest
}: LinkProps) => {
  return (
    <NextLink passHref {...rest}>
      <Typography.Link data-testid='link' {...typographyLinkProps}>
        {children}
      </Typography.Link>
    </NextLink>
  )
}

export default Link
