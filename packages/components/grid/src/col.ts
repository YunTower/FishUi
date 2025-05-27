import type { PropType } from 'vue'
import type { ResponsiveValue, FlexType } from './types'

interface ColSizeObject {
  span?: number;
  offset?: number;
  order?: number;
}

type ColSize = number | ColSizeObject

export interface ColProps {
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   */
  span?: number
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number
  /**
   * 对元素进行排序
   */
  order?: number
  /**
   * < 576px 响应式栅格
   */
  xs?: ColSize
  /**
   * >= 576px 响应式栅格
   */
  sm?: ColSize
  /**
   * >= 768px 响应式栅格
   */
  md?: ColSize
  /**
   * >= 992px 响应式栅格
   */
  lg?: ColSize
  /**
   * >= 1200px 响应式栅格
   */
  xl?: ColSize
  /**
   * >= 1600px 响应式栅格
   */
  xxl?: ColSize
  /**
   * 设置 flex 布局属性
   */
  flex?: FlexType
}

export const colProps = {
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number
  },
  order: {
    type: Number
  },
  xs: {
    type: [Number, Object] as PropType<ColSize>
  },
  sm: {
    type: [Number, Object] as PropType<ColSize>
  },
  md: {
    type: [Number, Object] as PropType<ColSize>
  },
  lg: {
    type: [Number, Object] as PropType<ColSize>
  },
  xl: {
    type: [Number, Object] as PropType<ColSize>
  },
  xxl: {
    type: [Number, Object] as PropType<ColSize>
  },
  flex: {
    type: [Number, String] as PropType<FlexType>
  }
} as const
