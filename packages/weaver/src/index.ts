import * as AntdComponents from 'antd'
import * as WeaverIcons from '@episclera/weaver-icons'
import * as WeaverUtils from '@episclera/weaver-utils'

const weaver = {
  ...AntdComponents,
  ...WeaverIcons,
  ...WeaverUtils,
}

export * from 'antd'
export * from '@episclera/weaver-icons'
export * from '@episclera/weaver-utils'

export default weaver
