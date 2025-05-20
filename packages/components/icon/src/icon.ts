import type { PropType } from 'vue'

export interface IconProps {
  name: string
  size?: string | number
  color?: string
}

export const iconProps = {
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
} as const
