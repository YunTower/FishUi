import type { PropType } from 'vue'

export interface TagProps {
  // 基本属性
  color?: 'red' | 'orangered' | 'orange' | 'gold' | 'lime' | 'green' | 'cyan' | 'blue' | 'fishblue' | 'purple' | 'pinkpurple' | 'magenta' | 'gray'
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'round' | 'mark'
  bordered?: boolean

  // 状态属性
  visible?: boolean
  loading?: boolean
  closable?: boolean
  disabled?: boolean

  // 样式属性
  nowrap?: boolean
  maxWidth?: string | number

  // 自定义主题相关
  theme?: 'default' | 'primary' | 'warning' | 'danger' | 'success'
  variant?: 'dark' | 'light' | 'outline' | 'light-outline'
}

export const tagProps = {
  color: {
    type: String as PropType<TagProps['color']>,
  },
  size: {
    type: String as PropType<TagProps['size']>,
    default: 'medium'
  },
  shape: {
    type: String as PropType<TagProps['shape']>,
    default: 'square'
  },
  bordered: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  nowrap: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: [String, Number]
  },
  theme: {
    type: String as PropType<TagProps['theme']>,
    default: 'default'
  },
  variant: {
    type: String as PropType<TagProps['variant']>,
    default: 'dark'
  }
} as const
