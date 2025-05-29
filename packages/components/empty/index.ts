import Empty from './src/empty.vue'
import { withInstall } from '../../utils/withInstall'
import type { EmptyProps } from './src/empty'

import './src/empty.css'

export const FEmpty = withInstall(Empty)

export type { EmptyProps }

export default {
  FEmpty
}
