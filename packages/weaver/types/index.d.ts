import React, { PropsWithChildren } from 'react'
import {
  RowProps,
  SpaceProps,
  PageHeaderProps,
  SpinProps,
  UploadProps,
  Upload as AntdUpload,
} from 'antd'
import { LinkProps as AntdLinkProps } from 'antd/lib/typography/Link'
import { TextAreaProps } from 'antd/lib/input'
import { UploadChangeParam } from 'antd/lib/upload'
import { LinkProps as NextLinkProps } from 'next/link'
import { ReactMarkdownOptions, ReactNode } from 'react-markdown'

// Antd and Next overridden components
export type ContainerProps = React.HTMLAttributes<HTMLDivElement>
export type TContainer = React.FC<ContainerProps>

export interface LinkProps
  extends NextLinkProps,
    PropsWithChildren<{
      typographyLinkProps?: AntdLinkProps
    }> {}

export type TLink = React.FC<LinkProps>

export type RowGutters = RowProps['gutter']

export type TRow = React.FC<RowProps>

export type TSpace = React.FC<SpaceProps>

export type TPageHeader = React.FC<PageHeaderProps>

export type TSpin = React.FC<SpinProps>

export type TMarkdownPreview = React.FC<ReactMarkdownOptions>

export type TMarkdownEditor = React.FC<TextAreaProps>

export interface MarkdownWrapper {
  Preview: TMarkdownPreview
  Editor: TMarkdownEditor
}

export interface UploadDraggerProps extends UploadProps {
  /**
   * Used to override default icon in dragger box
   */
  icon?: ReactNode
}

export type TUploadDragger = React.FC<UploadDraggerProps>

export interface UploadWrapper {
  Dragger: TUploadDragger
  /**
   * Just a re-export under a different name for Upload component
   * needed because antd uses Classes for top level components but we want to avoid
   * that in this repo because is a useless approach
   */
  Input: typeof AntdUpload
}

/**
 * Dragger onChange event param export
 * Exporting here because by default it is not exported from antd but is useful
 * and can be used in many situations when we need to do some manipulations with upload fileList array
 * or to take from there some info
 */
export type UploadChangeEventParam = UploadChangeParam

// export packages
export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'
export * from '@episclera/weaver-theme'
export const Container: TContainer
export const Link: TLink
export const Row: TRow
export const rowGutters: RowGutters
export const Space: TSpace
export const PageHeader: TPageHeader
export const Spin: TSpin
export const Markdown: MarkdownWrapper
export const Upload: UploadWrapper
