import type { PropType } from 'vue'
import type { ResponsiveValue } from './types'

export interface GridItemProps {
  /**
   * 跨越的格数
   */
  span?: number | ResponsiveValue
  /**
   * 左侧的间隔格数
   */
  offset?: number | ResponsiveValue
  /**
   * 是否是后缀元素
   */
  suffix?: boolean
}

export const gridItemProps = {
  span: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 1
  },
  offset: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  suffix: {
    type: Boolean,
    default: false
  }
} as const
