import type { PropType } from 'vue'
import type { ResponsiveValue } from './types'

export interface GridProps {
  /**
   * 每一行展示的列数
   */
  cols?: number | ResponsiveValue
  /**
   * 行与行之间的间距
   */
  rowGap?: number | ResponsiveValue
  /**
   * 列与列之间的间距
   */
  colGap?: number | ResponsiveValue
  /**
   * 是否折叠
   */
  collapsed?: boolean
  /**
   * 折叠时显示的行数
   */
  collapsedRows?: number
}

export const gridProps = {
  cols: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 24
  },
  rowGap: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  colGap: {
    type: [Number, Object] as PropType<number | ResponsiveValue>,
    default: 0
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  collapsedRows: {
    type: Number,
    default: 1
  }
} as const
