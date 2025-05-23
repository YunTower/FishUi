import type { PropType } from 'vue'

export type DividerDirection = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'center' | 'right'
export type DividerType = 'solid' | 'dashed' | 'dotted' | 'double'

export interface DividerProps {
  direction?: DividerDirection
  orientation?: DividerOrientation
  type?: DividerType
  size?: number
  margin?: number | string
}

export const dividerProps = {
  direction: {
    type: String as PropType<DividerDirection>,
    default: 'horizontal',
  },
  orientation: {
    type: String as PropType<DividerOrientation>,
    default: 'center',
  },
  type: {
    type: String as PropType<DividerType>,
    default: 'solid',
  },
  size: Number,
  margin: [Number, String],
} as const
