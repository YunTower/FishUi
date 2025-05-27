/**
 * 响应式配置接口
 */
export interface ResponsiveValue {
  xxl?: number // >= 1600px
  xl?: number // >= 1200px
  lg?: number // >= 992px
  md?: number // >= 768px
  sm?: number // >= 576px
  xs?: number // < 576px
}

/**
 * 水平对齐方式
 */
export type JustifyType = 'start' | 'center' | 'end' | 'space-around' | 'space-between'

/**
 * 垂直对齐方式
 */
export type AlignType = 'start' | 'center' | 'end' | 'stretch'

/**
 * Flex 属性类型
 */
export type FlexType = number | string | 'initial' | 'auto' | 'none'

/**
 * 栅格间隔类型
 */
export type GutterType = number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue]
