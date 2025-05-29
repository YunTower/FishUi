import type { PropType } from 'vue'

export interface BadgeGroupProps {
  /**
   * 徽标组间距
   */
  gap?: number | string
  /**
   * 排列方向
   */
  direction?: 'horizontal' | 'vertical'
}

export const badgeGroupProps = {
  gap: {
    type: [Number, String] as PropType<number | string>,
    default: 8
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  }
} as const
