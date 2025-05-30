import type { PropType } from 'vue'
import type { TagProps } from './tag'

export interface CheckTagProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  value?: string | number
  checkedProps?: Partial<TagProps>
  uncheckedProps?: Partial<TagProps>
}

export interface CheckTagChangeContext {
  e: MouseEvent | KeyboardEvent
  value: string | number
}

export const checkTagProps = {
  checked: {
    type: Boolean,
  },
  defaultChecked: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<CheckTagProps['size']>,
    default: 'medium'
  },
  value: {
    type: [String, Number]
  },
  checkedProps: {
    type: Object as PropType<Partial<TagProps>>,
  },
  uncheckedProps: {
    type: Object as PropType<Partial<TagProps>>,
  },
} as const
