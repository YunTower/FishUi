import type { PropType } from 'vue'

export type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large'

export interface SpaceProps {
  align?: 'start' | 'end' | 'center' | 'baseline'
  direction?: 'vertical' | 'horizontal'
  size?: SpaceSize | [SpaceSize, SpaceSize]
  wrap?: boolean
  fill?: boolean
}

export const spaceProps = {
  align: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
  size: {
    type: [String, Number, Array] as PropType<SpaceSize | [SpaceSize, SpaceSize]>,
    default: 'small',
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: Boolean,
    default: false,
  },
} as const
