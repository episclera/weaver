import React, { PropsWithChildren } from 'react'
import { PageHeader as AntdPageHeader, PageHeaderProps } from 'antd'
import { TPageHeader } from '../types'

const PageHeader: TPageHeader = ({
  children,
  ...rest
}: PropsWithChildren<PageHeaderProps>) => (
  <AntdPageHeader
    /**
     * Adding padding ZERO because by default pageHeader has paddings around which
     * mess the usage with Space component...and these default paddings
     * are un-controllable by less vars and are inconsistent with space paddings
     */
    style={{ padding: 0 }}
    {...rest}
  >
    {children}
  </AntdPageHeader>
)

export default PageHeader
