import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import { withInstall } from '../../utils/withInstall'
import type { ButtonProps } from './src/button'
import type { ButtonGroupProps } from './src/button-group'

export const FButton = withInstall(Button)
export const FButtonGroup = withInstall(ButtonGroup)

export type { ButtonProps, ButtonGroupProps }

export default {
  FButton,
  FButtonGroup,
}
