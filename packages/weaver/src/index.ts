import * as AntdComponents from 'antd'
import * as WeaverIcons from '@episclera/weaver-icons'
import * as WeaverUtils from '@episclera/weaver-utils'
import * as WeaverTheme from '@episclera/weaver-theme'
import Container from './Container'
import Row from './Row'
import Link from './Link'

const weaver = {
  ...AntdComponents,
  ...WeaverIcons,
  ...WeaverUtils,
  ...WeaverTheme,
  Container,
  Row,
  Link,
}

export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'
export * from '@episclera/weaver-theme'
export { default as Container } from './Container'
export { default as Row } from './Row'
export { default as Link } from './Link'

export default weaver
