import React from 'react'
import { RowProps, SpaceProps, PageHeaderProps, SpinProps } from 'antd'
import { LinkProps as NextLinkProps } from 'next/link'

// Antd and Next overridden components
export type ContainerProps = React.HTMLAttributes<HTMLDivElement>
export type TContainer = React.FC<ContainerProps>

export interface LinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    NextLinkProps {}
export type TLink = React.FC<LinkProps>

export type TRow = React.FC<RowProps>

export type TSpace = React.FC<SpaceProps>

export type TPageHeader = React.FC<PageHeaderProps>

export type TSpin = React.FC<SpinProps>

// export packages
export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'
export * from '@episclera/weaver-theme'
export const Container: TContainer
export const Link: TLink
export const Row: TRow
export const Space: TSpace
export const PageHeader: TPageHeader
export const Spin: TSpin
