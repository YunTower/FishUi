import type { PropType, CSSProperties } from 'vue'

export type AvatarShape = 'circle' | 'square'
export type AvatarTriggerType = 'mask' | 'button'
export type AvatarObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface AvatarProps {
  shape?: AvatarShape
  imageUrl?: string
  size?: number
  autoFixFontSize?: boolean
  triggerType?: AvatarTriggerType
  triggerIconStyle?: CSSProperties
  objectFit?: AvatarObjectFit
}

export const avatarProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle'
  },
  imageUrl: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 40
  },
  autoFixFontSize: {
    type: Boolean,
    default: true
  },
  triggerType: {
    type: String as PropType<AvatarTriggerType>,
    default: undefined
  },
  triggerIconStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  objectFit: {
    type: String as PropType<AvatarObjectFit>,
    default: 'cover'
  }
} as const
