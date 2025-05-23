import Card from './src/card.vue'
import CardMeta from './src/card-meta.vue'
import { withInstall } from '../../utils/withInstall'
import type { CardProps } from './src/card'
import type { CardMetaProps } from './src/card-meta'

import './src/card.css'

export const FCard = withInstall(Card)
export const FCardMeta = withInstall(CardMeta)

export type { CardProps, CardMetaProps }

export default {
  FCard,
  FCardMeta
}
