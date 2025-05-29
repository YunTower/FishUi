import Badge from './src/badge.vue'
import BadgeGroup from './src/badge-group.vue'
import { withInstall } from '../../utils/withInstall'
import type { BadgeProps } from './src/badge'
import type { BadgeGroupProps } from './src/badge-group'

export const FBadge = withInstall(Badge)
export const FBadgeGroup = withInstall(BadgeGroup)

export type { BadgeProps, BadgeGroupProps }

export default {
  FBadge,
  FBadgeGroup,
}
