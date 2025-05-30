import Tag from './src/tag.vue'
import CheckTag from './src/check-tag.vue'
import CheckTagGroup from './src/check-tag-group.vue'
import { withInstall } from '../../utils/withInstall'
import type { TagProps } from './src/tag'
import type { CheckTagProps } from './src/check-tag'
import type { CheckTagGroupProps } from './src/check-tag-group'

import './src/tag.css'

export const FTag = withInstall(Tag)
export const FCheckTag = withInstall(CheckTag)
export const FCheckTagGroup = withInstall(CheckTagGroup)

export type { TagProps, CheckTagProps, CheckTagGroupProps }

export default {
  FTag,
  FCheckTag,
  FCheckTagGroup,
}
