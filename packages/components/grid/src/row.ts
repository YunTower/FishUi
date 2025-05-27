import type { PropType } from 'vue'
import type { GutterType, JustifyType, AlignType } from './types'

export interface RowProps {
  /**
   * 栅格间隔，单位是px
   * 可以是数字或者响应式对象 { xs: 4, sm: 6, md: 12}
   * 也可以是数组 [水平间距, 垂直间距]
   */
  gutter?: GutterType
  /**
   * 水平对齐方式
   */
  justify?: JustifyType
  /**
   * 垂直对齐方式
   */
  align?: AlignType
  /**
   * 是否作为普通div使用，不附带Grid相关类和样式
   */
  div?: boolean
  /**
   * Col是否支持换行
   */
  wrap?: boolean
}

export const rowProps = {
  gutter: {
    type: [Number, Object, Array] as PropType<GutterType>,
    default: 0
  },
  justify: {
    type: String as PropType<JustifyType>,
    default: 'start'
  },
  align: {
    type: String as PropType<AlignType>,
    default: 'start'
  },
  div: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: Boolean,
    default: true
  }
} as const
