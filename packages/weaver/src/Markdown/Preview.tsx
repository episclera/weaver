import React from 'react'
import { Typography } from 'antd'
import MDPreview, { ReactMarkdownOptions } from 'react-markdown'
import { TMarkdownPreview } from '../../types'

/**
 * Markdown preview component
 */
const MarkdownPreview: TMarkdownPreview = ({
  children,
  ...rest
}: ReactMarkdownOptions) => (
  <MDPreview
    allowedElements={[
      'p',
      'strong',
      'em',
      'a',
      'blockquote',
      /**
       * allowing both list types "ol" and "ul" to avoid situations when numbered/ordered lists will be removed
       */
      'ol',
      'ul',
      /**
       * "li" is allowed because is used as children in "ol" and "ul"
       */
      'li',
    ]}
    components={{
      p: (props: Record<string, any>) => <Typography.Paragraph {...props} />,
      strong: (props: Record<string, any>) => (
        <Typography.Text strong {...props} />
      ),
      em: (props: Record<string, any>) => <Typography.Text italic {...props} />,
      a: (props: Record<string, any>) => (
        <Typography.Link target='_blank' {...props} />
      ),
      blockquote: (props: Record<string, any>) => (
        <Typography.Text italic {...props} />
      ),
      ol: (props: Record<string, any>) => <Typography.Text {...props} />,
      ul: (props: Record<string, any>) => <Typography.Text {...props} />,
    }}
    /**
     * This props is needed for security considerations to not allow users to inject
     * insecure content
     */
    skipHtml
    /**
     * Using classnames for identification because data-testid is not supported by MDEditor
     */
    className='markdown-preview'
    {...rest}
  >
    {children}
  </MDPreview>
)

export default MarkdownPreview
