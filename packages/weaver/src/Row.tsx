import React from 'react'
import { Row as AntdRow, RowProps } from 'antd'
import { TRow } from '../types'

const Row: TRow = ({ children, ...rest }: RowProps) => (
  <AntdRow
    gutter={[
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 },
      { xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32 },
    ]}
    align='top'
    justify='center'
    data-testid='row'
    {...rest}
  >
    {children}
  </AntdRow>
)

export default Row
