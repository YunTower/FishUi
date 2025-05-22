import type { PropType } from 'vue'

export type TriggerType = 'click' | 'hover' | 'focus'

export interface TriggerProps {
  /**
   * 触发方式
   * @default ['click']
   */
  trigger?: TriggerType | TriggerType[]
  /**
   * 触发器类型
   * @default 'mask'
   */
  type?: 'mask' | 'button'
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 触发器图标样式
   */
  iconStyle?: Record<string, any>
}

export const triggerProps = {
  trigger: {
    type: [String, Array] as PropType<TriggerType | TriggerType[]>,
    default: ['click']
  },
  type: {
    type: String as PropType<'mask' | 'button'>,
    default: 'mask'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
} as const
