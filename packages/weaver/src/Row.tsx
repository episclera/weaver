import React from 'react'
import { Row as AntdRow, RowProps } from 'antd'
import { TRow, RowGutters } from '../types'

/**
 * Exporting also row gutters because they are useful in some situations when need to se
 * gutters values outside of this library e.g(to make gutters not responsive but just to have md size always for example)
 */
export const rowGutters: RowGutters = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 32,
  xxl: 32,
}

const Row: TRow = ({ children, ...rest }: RowProps) => (
  <AntdRow
    gutter={[rowGutters, rowGutters]}
    align='top'
    justify='center'
    data-testid='row'
    {...rest}
  >
    {children}
  </AntdRow>
)

export default Row
