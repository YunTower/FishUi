import Icon from './src/icon.vue'
import { withInstall } from '../../utils/withInstall'
import type { IconProps } from './src/icon'

export const FIcon = withInstall(Icon)

export type { IconProps }

export default {
  FIcon,
}

export * from './src/icon.vue'
