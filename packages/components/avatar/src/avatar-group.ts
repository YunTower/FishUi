import type { PropType, CSSProperties } from 'vue'
import type { AvatarShape, AvatarSize } from './avatar'

export interface AvatarGroupProps {
  /**
   * 头像形状
   * @default 'circle'
   */
  shape?: AvatarShape
  /**
   * 头像大小
   * @default 40
   */
  size?: AvatarSize
  /**
   * 最多显示的头像数量，超出会显示 +N
   * @default 0 (不限制)
   */
  maxCount?: number
  /**
   * z-index是否按照升序排列
   * @default false
   */
  zIndexAscend?: boolean
  /**
   * 自动调整字体大小
   * @default true
   */
  autoFixFontSize?: boolean
  /**
   * 头像之间的间距
   * @default -15
   */
  gap?: number
  /**
   * 额外的头像样式
   */
  extraAvatarStyle?: CSSProperties
}

export const avatarGroupProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle'
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: 40
  },
  maxCount: {
    type: Number,
    default: 0
  },
  zIndexAscend: {
    type: Boolean,
    default: false
  },
  autoFixFontSize: {
    type: Boolean,
    default: true
  },
  gap: {
    type: Number,
    default: -15
  },
  extraAvatarStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  }
} as const
