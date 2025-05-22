import Trigger from './src/trigger.vue'
import { withInstall } from '../../utils/withInstall'
import type { TriggerProps } from './src/trigger'

export const FTrigger = withInstall(Trigger)

export type { TriggerProps }

export default {
  FTrigger
}
