import type { PropType } from 'vue'

export type SiderTheme = 'dark' | 'light'
export type SiderBreakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type SiderResizeDirection = 'left' | 'right' | 'top' | 'bottom'

export interface LayoutSiderProps {
  theme?: SiderTheme
  collapsed?: boolean
  defaultCollapsed?: boolean
  collapsible?: boolean
  width?: number
  collapsedWidth?: number
  reverseArrow?: boolean
  breakpoint?: SiderBreakpoint
  resizeDirections?: SiderResizeDirection[]
  hideTrigger?: boolean
}

export const layoutSiderProps = {
  theme: {
    type: String as PropType<SiderTheme>,
    default: 'light',
  },
  collapsed: Boolean,
  defaultCollapsed: {
    type: Boolean,
    default: false,
  },
  collapsible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 200,
  },
  collapsedWidth: {
    type: Number,
    default: 48,
  },
  reverseArrow: {
    type: Boolean,
    default: false,
  },
  breakpoint: String as PropType<SiderBreakpoint>,
  resizeDirections: Array as PropType<SiderResizeDirection[]>,
  hideTrigger: {
    type: Boolean,
    default: false,
  },
} as const
