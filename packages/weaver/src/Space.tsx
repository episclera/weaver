import React, { PropsWithChildren } from 'react'
import { Space as AntdSpace, SpaceProps } from 'antd'
import { TSpace } from '../types'

const Space: TSpace = ({
  children,
  ...rest
}: PropsWithChildren<SpaceProps>) => (
  <AntdSpace
    size='large'
    direction='vertical'
    data-testid='space'
    /**
     * Adding width full because by default space doesn't respect parent width
     * and sometimes it can overflow the parent
     */
    style={{ width: '100%' }}
    {...rest}
  >
    {children}
  </AntdSpace>
)

export default Space
