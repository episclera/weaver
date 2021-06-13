import React, { PropsWithChildren } from 'react'
import { Space as AntdSpace, SpaceProps } from 'antd'
import { TSpace } from '../types'

const Space: TSpace = ({
  children,
  ...rest
}: PropsWithChildren<SpaceProps>) => (
  <AntdSpace size='large' direction='vertical' data-testid='space' {...rest}>
    {children}
  </AntdSpace>
)

export default Space
