import type { PropType } from 'vue'

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  shape?: 'default' | 'circle' | 'round'
  type?: 'default' | 'outline' | 'dashed' | 'text'
  loading?: boolean
  long?: boolean
  disabled?: boolean
}

export const buttonProps = {
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  theme: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default'
  },
  shape: {
    type: String as PropType<'default' | 'circle' | 'round'>,
    default: 'default'
  },
  type: {
    type: String as PropType<'default' | 'outline' | 'dashed' | 'text'>,
    default: 'default'
  },
  loading: {
    type: Boolean,
    default: false
  },
  long: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const
