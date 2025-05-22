import { App } from 'vue'
import AvatarGroup from './avatar-group.vue'
import './avatar-group.css'
import type { PropType, CSSProperties } from 'vue'
import type { TriggerProps } from '../popover'
import type { AvatarShape } from './avatar'

export { AvatarGroup }

export default {
  install(app: App) {
    app.component('FishAvatarGroup', AvatarGroup)
  }
}

export interface AvatarGroupProps {
  shape?: AvatarShape
  size?: number
  autoFixFontSize?: boolean
  maxCount?: number
  zIndexAscend?: boolean
  maxStyle?: CSSProperties
  maxPopoverTriggerProps?: TriggerProps
}

export const avatarGroupProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle'
  },
  size: {
    type: Number,
    default: 40
  },
  autoFixFontSize: {
    type: Boolean,
    default: true
  },
  maxCount: {
    type: Number,
    default: 0
  },
  zIndexAscend: {
    type: Boolean,
    default: false
  },
  maxStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  maxPopoverTriggerProps: {
    type: Object as PropType<TriggerProps>,
    default: undefined
  }
} as const
