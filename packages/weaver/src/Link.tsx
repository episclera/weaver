import React from 'react'
import { Typography } from 'antd'
import NextLink from 'next/link'
import { TLink, LinkProps } from '../types'

const Link: TLink = ({ children, className, href, ...rest }: LinkProps) => {
  return (
    <NextLink href={href} passHref {...rest}>
      <Typography.Link className={className} data-testid='link'>
        {children}
      </Typography.Link>
    </NextLink>
  )
}

export default Link
