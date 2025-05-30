import type { PropType } from 'vue'
import type { CheckTagProps } from './check-tag'
import type { TagProps } from './tag'

export type CheckTagGroupValue = Array<string | number>

export interface CheckTagGroupOption extends Omit<CheckTagProps, 'value'> {
  label: string
  value: string | number
}

export interface CheckTagGroupChangeContext {
  type: 'check' | 'uncheck'
  e: MouseEvent | KeyboardEvent
  value: string | number
}

export interface CheckTagGroupProps {
  multiple?: boolean
  options?: CheckTagGroupOption[]
  value?: CheckTagGroupValue
  defaultValue?: CheckTagGroupValue
  checkedProps?: Partial<TagProps>
  uncheckedProps?: Partial<TagProps>
}

export const checkTagGroupProps = {
  multiple: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<CheckTagGroupOption[]>,
  },
  value: {
    type: Array as PropType<CheckTagGroupValue>,
  },
  defaultValue: {
    type: Array as PropType<CheckTagGroupValue>,
    default: () => []
  },
  checkedProps: {
    type: Object as PropType<Partial<TagProps>>,
  },
  uncheckedProps: {
    type: Object as PropType<Partial<TagProps>>,
  },
} as const
