import React from 'react'
import { RowProps } from 'antd'
import { LinkProps as NextLinkProps } from 'next/link'

// Antd and Next overridden components
export type ContainerProps = React.HTMLAttributes<HTMLDivElement>
export type TContainer = React.FC<ContainerProps>

export type TRow = React.FC<RowProps>

export interface LinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    NextLinkProps {}
export type TLink = React.FC<LinkProps>

// export packages
export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'
export * from '@episclera/weaver-theme'
export const Container: TContainer
export const Row: TRow
export const Link: TLink
