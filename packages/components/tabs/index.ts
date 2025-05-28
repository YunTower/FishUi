import Tabs from './src/tabs.vue'
import TabPane from './src/tab-pane.vue'
import { withInstall } from '../../utils/withInstall'
import type { TabsProps, TabPaneProps } from './src/tabs'

export const FTabs = withInstall(Tabs)
export const FTabPane = withInstall(TabPane)

export type { TabsProps, TabPaneProps }

export default {
  FTabs,
  FTabPane
}
