import Layout from './src/layout.vue'
import LayoutHeader from './src/layout-header.vue'
import LayoutContent from './src/layout-content.vue'
import LayoutFooter from './src/layout-footer.vue'
import LayoutSider from './src/layout-sider.vue'
import { withInstall } from '../../utils/withInstall'
import type { LayoutProps } from './src/layout'
import type { LayoutSiderProps } from './src/layout-sider.ts'

export const FLayout = withInstall(Layout)
export const FLayoutHeader = withInstall(LayoutHeader)
export const FLayoutContent = withInstall(LayoutContent)
export const FLayoutFooter = withInstall(LayoutFooter)
export const FLayoutSider = withInstall(LayoutSider)

export type { LayoutSiderProps, LayoutProps }

export default {
  FLayout,
  FLayoutHeader,
  FLayoutContent,
  FLayoutFooter,
  FLayoutSider
}
