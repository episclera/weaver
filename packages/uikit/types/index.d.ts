import React from 'react'
import {
  Affix as AntdAffix,
  Anchor as AntdAnchor,
  AutoComplete as AntdAutoComplete,
  Alert as AntdAlert,
  Avatar as AntdAvatar,
  BackTop as AntdBackTop,
  Badge as AntdBadge,
  Breadcrumb as AntdBreadcrumb,
  Button as AntdButton,
  Calendar as AntdCalendar,
  Card as AntdCard,
  Collapse as AntdCollapse,
  Carousel as AntdCarousel,
  Cascader as AntdCascader,
  Checkbox as AntdCheckbox,
  Col as AntdCol,
  Comment as AntdComment,
  ConfigProvider as AntdConfigProvider,
  DatePicker as AntdDatePicker,
  Descriptions as AntdDescriptions,
  Divider as AntdDivider,
  Dropdown as AntdDropdown,
  Drawer as AntdDrawer,
  Empty as AntdEmpty,
  Form as AntdForm,
  Grid as AntdGrid,
  Input as AntdInput,
  Image as AntdImage,
  InputNumber as AntdInputNumber,
  Layout as AntdLayout,
  List as AntdList,
  message as AntdMessage,
  Menu as AntdMenu,
  Mentions as AntdMentions,
  Modal as AntdModal,
  Statistic as AntdStatistic,
  notification as AntdNotification,
  PageHeader as AntdPageHeader,
  Pagination as AntdPagination,
  Popconfirm as AntdPopconfirm,
  Popover as AntdPopover,
  Progress as AntdProgress,
  Radio as AntdRadio,
  Rate as AntdRate,
  Result as AntdResult,
  Row as AntdRow,
  Select as AntdSelect,
  Skeleton as AntdSkeleton,
  Slider as AntdSlider,
  Space as AntdSpace,
  Spin as AntdSpin,
  Steps as AntdSteps,
  Switch as AntdSwitch,
  Table as AntdTable,
  Transfer as AntdTransfer,
  Tree as AntdTree,
  TreeSelect as AntdTreeSelect,
  Tabs as AntdTabs,
  Tag as AntdTag,
  TimePicker as AntdTimePicker,
  Timeline as AntdTimeline,
  Tooltip as AntdTooltip,
  Typography as AntdTypography,
  Upload as AntdUpload,
  version as AntdVersion,
} from 'antd'
import {
  DeviceDetectProviderProps,
  DeviceContext,
  TUseScreenSize,
  TWithMobileDetect,
  TIsBrowser,
} from '@episclera/uikit-utils'

export interface Components {
  Affix: typeof AntdAffix
  Anchor: typeof AntdAnchor
  AutoComplete: typeof AntdAutoComplete
  Alert: typeof AntdAlert
  Avatar: typeof AntdAvatar
  BackTop: typeof AntdBackTop
  Badge: typeof AntdBadge
  Breadcrumb: typeof AntdBreadcrumb
  Button: typeof AntdButton
  Calendar: typeof AntdCalendar
  Card: typeof AntdCard
  Collapse: typeof AntdCollapse
  Carousel: typeof AntdCarousel
  Cascader: typeof AntdCascader
  Checkbox: typeof AntdCheckbox
  Col: typeof AntdCol
  Comment: typeof AntdComment
  ConfigProvider: typeof AntdConfigProvider
  DatePicker: typeof AntdDatePicker
  Descriptions: typeof AntdDescriptions
  Divider: typeof AntdDivider
  Dropdown: typeof AntdDropdown
  Drawer: typeof AntdDrawer
  Empty: typeof AntdEmpty
  Form: typeof AntdForm
  Grid: typeof AntdGrid
  Input: typeof AntdInput
  Image: typeof AntdImage
  InputNumber: typeof AntdInputNumber
  Layout: typeof AntdLayout
  List: typeof AntdList
  message: typeof AntdMessage
  Menu: typeof AntdMenu
  Mentions: typeof AntdMentions
  Modal: typeof AntdModal
  Statistic: typeof AntdStatistic
  notification: typeof AntdNotification
  PageHeader: typeof AntdPageHeader
  Pagination: typeof AntdPagination
  Popconfirm: typeof AntdPopconfirm
  Popover: typeof AntdPopover
  Progress: typeof AntdProgress
  Radio: typeof AntdRadio
  Rate: typeof AntdRate
  Result: typeof AntdResult
  Row: typeof AntdRow
  Select: typeof AntdSelect
  Skeleton: typeof AntdSkeleton
  Slider: typeof AntdSlider
  Space: typeof AntdSpace
  Spin: typeof AntdSpin
  Steps: typeof AntdSteps
  Switch: typeof AntdSwitch
  Table: typeof AntdTable
  Transfer: typeof AntdTransfer
  Tree: typeof AntdTree
  TreeSelect: typeof AntdTreeSelect
  Tabs: typeof AntdTabs
  Tag: typeof AntdTag
  TimePicker: typeof AntdTimePicker
  Timeline: typeof AntdTimeline
  Tooltip: typeof AntdTooltip
  Typography: typeof AntdTypography
  Upload: typeof AntdUpload
  version: typeof AntdVersion
}

export interface Uikit extends Components {
  // mobile detect
  DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
  DeviceDetectContext: React.Context<DeviceContext>
  useScreenSize: TUseScreenSize
  withMobileDetect: TWithMobileDetect
  // utils
  isBrowser: TIsBrowser
}

// package exports
// components
export const Affix: typeof AntdAffix
export const Anchor: typeof AntdAnchor
export const AutoComplete: typeof AntdAutoComplete
export const Alert: typeof AntdAlert
export const Avatar: typeof AntdAvatar
export const BackTop: typeof AntdBackTop
export const Badge: typeof AntdBadge
export const Breadcrumb: typeof AntdBreadcrumb
export const Button: typeof AntdButton
export const Calendar: typeof AntdCalendar
export const Card: typeof AntdCard
export const Collapse: typeof AntdCollapse
export const Carousel: typeof AntdCarousel
export const Cascader: typeof AntdCascader
export const Checkbox: typeof AntdCheckbox
export const Col: typeof AntdCol
export const Comment: typeof AntdComment
export const ConfigProvider: typeof AntdConfigProvider
export const DatePicker: typeof AntdDatePicker
export const Descriptions: typeof AntdDescriptions
export const Divider: typeof AntdDivider
export const Dropdown: typeof AntdDropdown
export const Drawer: typeof AntdDrawer
export const Empty: typeof AntdEmpty
export const Form: typeof AntdForm
export const Grid: typeof AntdGrid
export const Input: typeof AntdInput
export const Image: typeof AntdImage
export const InputNumber: typeof AntdInputNumber
export const Layout: typeof AntdLayout
export const List: typeof AntdList
export const message: typeof AntdMessage
export const Menu: typeof AntdMenu
export const Mentions: typeof AntdMentions
export const Modal: typeof AntdModal
export const Statistic: typeof AntdStatistic
export const notification: typeof AntdNotification
export const PageHeader: typeof AntdPageHeader
export const Pagination: typeof AntdPagination
export const Popconfirm: typeof AntdPopconfirm
export const Popover: typeof AntdPopover
export const Progress: typeof AntdProgress
export const Radio: typeof AntdRadio
export const Rate: typeof AntdRate
export const Result: typeof AntdResult
export const Row: typeof AntdRow
export const Select: typeof AntdSelect
export const Skeleton: typeof AntdSkeleton
export const Slider: typeof AntdSlider
export const Space: typeof AntdSpace
export const Spin: typeof AntdSpin
export const Steps: typeof AntdSteps
export const Switch: typeof AntdSwitch
export const Table: typeof AntdTable
export const Transfer: typeof AntdTransfer
export const Tree: typeof AntdTree
export const TreeSelect: typeof AntdTreeSelect
export const Tabs: typeof AntdTabs
export const Tag: typeof AntdTag
export const TimePicker: typeof AntdTimePicker
export const Timeline: typeof AntdTimeline
export const Tooltip: typeof AntdTooltip
export const Typography: typeof AntdTypography
export const Upload: typeof AntdUpload
export const version: typeof AntdVersion
// mobile detect
export const DeviceDetectProvider: React.FC<DeviceDetectProviderProps>
export const DeviceDetectContext: React.Context<DeviceContext>
export const useScreenSize: TUseScreenSize
export const withMobileDetect: TWithMobileDetect
// utils
export const isBrowser: TIsBrowser

// main pack
declare const uikit: Uikit

export default uikit
