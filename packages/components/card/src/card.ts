import type { PropType, CSSProperties } from 'vue'

export interface CardProps {
  bordered?: boolean
  loading?: boolean
  hoverable?: boolean
  size?: 'medium' | 'small'
  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
  title?: string
  extra?: string
}

export const cardProps = {
  bordered: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'medium' | 'small'>,
    default: 'medium'
  },
  headerStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  title: {
    type: String,
    default: undefined
  },
  extra: {
    type: String,
    default: undefined
  }
} as const
