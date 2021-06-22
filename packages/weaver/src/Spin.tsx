import React, { PropsWithChildren } from 'react'
import { Spin as AntdSpin, SpinProps } from 'antd'
import { LoadingOutlined } from '@episclera/weaver-icons'
import { TSpin } from '../types'
/**
 * Defining default spin element globally because it is used internally in Antd
 * in many components like (Table, List etc.)
 */
AntdSpin.setDefaultIndicator(<LoadingOutlined />)

const Spin: TSpin = ({ children, ...rest }: PropsWithChildren<SpinProps>) => (
  <AntdSpin size='large' data-testid='spin' {...rest}>
    {children}
  </AntdSpin>
)

export default Spin
