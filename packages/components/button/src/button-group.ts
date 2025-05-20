import type { PropType } from 'vue'

export interface ButtonGroupProps {
  size?: 'small' | 'medium' | 'large'
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  shape?: 'default' | 'circle' | 'round'
  type?: 'default' | 'outline' | 'dashed' | 'text'
}

export const buttonGroupProps = {
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
  }
} as const
