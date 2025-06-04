import Loading from './src/Loading.vue'
import LoadingPlugin, { $loading } from './plugin'
import vLoading from './directive'
import { withInstall } from '../../utils/withInstall'
import type { LoadingInstance } from './plugin'
import type { LoadingProps, AttachNode, TNode } from './src/types'

export const FLoading = withInstall(Loading)

export { LoadingPlugin, $loading, vLoading }
export type { LoadingInstance, LoadingProps, AttachNode, TNode }

export default {
  FLoading,
}
