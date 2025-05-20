import type { PropType } from 'vue'

export interface LinkProps {
  content?: string
  disabled?: boolean
  download?: string | boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
  target?: string
  underline?: 'always' | 'hover' | 'none'
}

export const linkProps = {
  content: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  download: {
    type: [String, Boolean] as PropType<string | boolean>,
    default: undefined
  },
  href: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  theme: {
    type: String as PropType<'default' | 'primary' | 'danger' | 'warning' | 'success'>,
    default: 'default'
  },
  target: {
    type: String,
    default: undefined
  },
  underline: {
    type: String as PropType<'always' | 'hover' | 'none'>,
    default: 'hover'
  }
} as const
