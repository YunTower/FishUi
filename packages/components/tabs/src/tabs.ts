import type { PropType } from 'vue'

export interface TabsProps {
  activeKey?: string | number
  defaultActiveKey?: string | number
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'mini' | 'small' | 'medium' | 'large'
  type?: 'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule'
  direction?: 'horizontal' | 'vertical'
  editable?: boolean
  showAddButton?: boolean
  destroyOnHide?: boolean
  lazyLoad?: boolean
  justify?: boolean
  animation?: boolean
  headerPadding?: boolean
  autoSwitch?: boolean
  hideContent?: boolean
  trigger?: 'hover' | 'click'
  scrollPosition?: 'start' | 'end' | 'center' | 'auto' | number
  wheelScroll?: boolean
}

export interface TabPaneProps {
  title?: string
  key?: string | number
  disabled?: boolean
  closable?: boolean
  destroyOnHide?: boolean
}

export const tabsProps = {
  activeKey: {
    type: [String, Number] as PropType<string | number>,
    default: undefined
  },
  defaultActiveKey: {
    type: [String, Number] as PropType<string | number>,
    default: undefined
  },
  position: {
    type: String as PropType<'left' | 'right' | 'top' | 'bottom'>,
    default: 'top'
  },
  size: {
    type: String as PropType<'mini' | 'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  type: {
    type: String as PropType<'line' | 'card' | 'card-gutter' | 'text' | 'rounded' | 'capsule'>,
    default: 'line'
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  editable: {
    type: Boolean,
    default: false
  },
  showAddButton: {
    type: Boolean,
    default: false
  },
  destroyOnHide: {
    type: Boolean,
    default: false
  },
  lazyLoad: {
    type: Boolean,
    default: false
  },
  justify: {
    type: Boolean,
    default: false
  },
  animation: {
    type: Boolean,
    default: false
  },
  headerPadding: {
    type: Boolean,
    default: true
  },
  autoSwitch: {
    type: Boolean,
    default: false
  },
  hideContent: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'click'
  },
  scrollPosition: {
    type: [String, Number] as PropType<'start' | 'end' | 'center' | 'auto' | number>,
    default: 'auto'
  },
  wheelScroll: {
    type: Boolean,
    default: true
  }
} as const

export const tabPaneProps = {
  title: {
    type: String,
    default: ''
  },
  key: {
    type: [String, Number],
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: true
  },
  destroyOnHide: {
    type: Boolean,
    default: false
  }
} as const
