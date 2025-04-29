import { withInstall } from '@/utils'
import Button from './src/button.vue'
import ButtonGroup  from './src/button-group.vue'

export const FButton = withInstall(Button)
export const FButtonGroup = withInstall(ButtonGroup)
export default {
  FButton,
  FButtonGroup,
}
