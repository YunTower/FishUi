import type { PropType } from 'vue'

export type AvatarShape = 'circle' | 'square'
export type AvatarSize = number | 'mini' | 'small' | 'medium' | 'large'
export type AvatarTriggerType = 'mask' | 'button'
export type AvatarObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface AvatarProps {
  shape?: AvatarShape
  size?: AvatarSize
  imageUrl?: string
  autoFixFontSize?: boolean
  triggerType?: AvatarTriggerType
  triggerIconStyle?: Record<string, any>
  objectFit?: AvatarObjectFit
  backgroundColor?: string
}

export const avatarProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle'
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: 'medium'
  },
  imageUrl: String,
  autoFixFontSize: {
    type: Boolean,
    default: true
  },
  triggerType: {
    type: String as PropType<AvatarTriggerType>,
    default: 'mask'
  },
  triggerIconStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  objectFit: {
    type: String as PropType<AvatarObjectFit>,
    default: 'cover'
  },
  backgroundColor: String
} as const
