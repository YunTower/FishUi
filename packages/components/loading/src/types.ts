export type AttachNode = string | (() => HTMLElement)
export type TNode = string | (() => any)

export interface LoadingProps {
  attach?: AttachNode
  content?: TNode
  default?: TNode
  delay?: number
  fullscreen?: boolean
  indicator?: boolean | TNode
  inheritColor?: boolean
  loading?: boolean
  preventScrollThrough?: boolean
  showOverlay?: boolean
  size?: string
  text?: TNode
  zIndex?: number
}
