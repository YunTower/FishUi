import type { PropType } from 'vue'

export type ColorType = 'primary' | 'success' | 'warning' | 'danger'
export type StatusType = 'normal' | 'processing' | 'success' | 'warning' | 'danger'
export type ShapeType = 'circle' | 'round'
export type SizeType = 'small' | 'medium'

export interface BadgeProps {
  /**
   * 徽标内容
   */
  text?: string
  /**
   * 徽标显示的数字
   */
  count?: number
  /**
   * 显示为小红点
   */
  dot?: boolean
  /**
   * 徽标的样式
   */
  dotStyle?: Record<string, any>
  /**
   * 徽标最大显示数值，如果count超过这个数值会显示为maxCount+
   */
  maxCount?: number
  /**
   * 设置徽标位置的偏移
   */
  offset?: [number, number]
  /**
   * 徽标的颜色，内置或自定义颜色
   */
  color?: ColorType | string
  /**
   * 徽标的状态类型
   */
  status?: StatusType
  /**
   * 形状
   */
  shape?: ShapeType
  /**
   * 尺寸
   */
  size?: SizeType
  /**
   * 当数值为0时，是否展示徽标
   */
  showZero?: boolean
}

export const badgeProps = {
  text: String,
  count: Number,
  dot: {
    type: Boolean,
    default: false
  },
  dotStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  maxCount: {
    type: Number,
    default: 99
  },
  offset: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => []
  },
  color: {
    type: String as PropType<ColorType | string>,
  },
  status: {
    type: String as PropType<StatusType>,
  },
  shape: {
    type: String as PropType<ShapeType>,
    default: 'circle'
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  },
  showZero: {
    type: Boolean,
    default: false
  }
} as const
