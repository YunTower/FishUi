export interface CardMetaProps {
  title?: string
  description?: string
}

export const cardMetaProps = {
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  }
} as const
