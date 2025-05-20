import Link from './src/link.vue'
import { withInstall } from '../../utils/withInstall'
import type { LinkProps } from './src/link'

export const FLink = withInstall(Link)

export type { LinkProps }

export default {
  FLink,
}
