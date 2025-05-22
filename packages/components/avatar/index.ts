import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group.vue'
import { withInstall } from '../../utils/withInstall'
import type { AvatarProps } from './src/avatar'
import type { AvatarGroupProps } from './src/avatar-group'

export const FAvatar = withInstall(Avatar)
export const FAvatarGroup = withInstall(AvatarGroup)

export type { AvatarProps, AvatarGroupProps }

export default {
  FAvatar,
  FAvatarGroup,
}
