import type { PropType, CSSProperties } from 'vue'

export type SizeEnum = 'small' | 'medium' | 'large'
export type EmptyType = 'empty' | 'success' | 'fail' | 'network-error' | 'maintenance'

export interface EmptyProps {
  description?: string
  imgSrc?: string
  inConfigProvider?: boolean
  imageStyle?: CSSProperties
  size?: SizeEnum
  title?: string
  type?: EmptyType
}

export const emptyProps = {
  description: {
    type: String,
    default: undefined
  },
  imgSrc: {
    type: String,
    default: undefined
  },
  inConfigProvider: {
    type: Boolean,
    default: false
  },
  imageStyle: {
    type: Object as PropType<CSSProperties>,
    default: undefined
  },
  size: {
    type: String as PropType<SizeEnum>,
    default: 'medium'
  },
  title: {
    type: String,
    default: undefined
  },
  type: {
    type: String as PropType<EmptyType>,
    default: 'empty'
  }
} as const
