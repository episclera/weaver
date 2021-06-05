import React from 'react'
import { weaverTheme } from '@episclera/weaver-theme'
import { TContainer, ContainerProps } from '../types'

const Container: TContainer = ({ children, ...rest }: ContainerProps) => (
  <div
    style={{
      width: '100%',
      maxWidth: weaverTheme('screen-xxl') as string,
      margin: '0 auto',
    }}
    data-testid='container'
    {...rest}
  >
    {children}
  </div>
)

export default Container
