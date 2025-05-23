export interface LayoutProps {
  hasSider?: boolean
}

export const layoutProps = {
  hasSider: {
    type: Boolean,
    default: false,
  },
} as const
