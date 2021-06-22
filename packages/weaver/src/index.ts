import * as AntdComponents from 'antd'
import * as WeaverIcons from '@episclera/weaver-icons'
import * as WeaverUtils from '@episclera/weaver-utils'
import * as WeaverTheme from '@episclera/weaver-theme'
import Container from './Container'
import Link from './Link'
import Row from './Row'
import Space from './Space'
import PageHeader from './PageHeader'
import Spin from './Spin'

const weaver = {
  ...AntdComponents,
  ...WeaverIcons,
  ...WeaverUtils,
  ...WeaverTheme,
  Container,
  Link,
  Row,
  Space,
  PageHeader,
  Spin,
}

export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'
export * from '@episclera/weaver-theme'
export { default as Container } from './Container'
export { default as Link } from './Link'
export { default as Row } from './Row'
export { default as Space } from './Space'
export { default as PageHeader } from './PageHeader'
export { default as Spin } from './Spin'

export default weaver
