import React, { PropsWithChildren } from 'react'
import { Upload } from 'antd'
import { FolderOpenOutlined } from '@episclera/weaver-icons'
import { weaverTheme } from '@episclera/weaver-theme'
import Space from '../Space'
import { TUploadDragger, UploadDraggerProps } from '../../types'

const Dragger: TUploadDragger = ({
  icon,
  children,
  ...rest
}: PropsWithChildren<UploadDraggerProps>) => (
  <Upload.Dragger
    multiple
    /**
     * Only 5 files are allowed to upload due to upload provider resources consumption
     * this number can be increased but if we will have a big list of images it will broke the
     * UX/UI in images carousel
     */
    maxCount={5}
    listType='picture-card'
    showUploadList={{
      /**
       * Disabling preview images because it involves additional
       * UI functionality which is useless because user can view
       * files on his machine
       */
      showPreviewIcon: false,
    }}
    style={{
      /**
       * Adding height because by default dragger in antd design is to small
       */
      height: 126,
      /**
       * Adding margin bottom because by default the list under dragger box
       * is to close to the dragger box and from UI perspective that doesn't look good
       */
      marginBottom: '0.5rem',
    }}
    data-testid='upload-dragger'
    {...rest}
  >
    <Space size='small'>
      {icon || (
        <FolderOpenOutlined
          /**
           * Adding fontSize because default Icons size are to small and
           * from UI perspective it doesn't look good
           */
          style={{
            fontSize: '2.25rem',
            color: weaverTheme('text-color-secondary') as string,
          }}
        />
      )}
      {children}
    </Space>
  </Upload.Dragger>
)

export default Dragger
