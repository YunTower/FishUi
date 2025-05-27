import Row from './src/row.vue'
import Col from './src/col.vue'
import Grid from './src/grid.vue'
import GridItem from './src/grid-item.vue'
import { withInstall } from '../../utils/withInstall'
import type { RowProps } from './src/row'
import type { ColProps } from './src/col'
import type { GridProps } from './src/grid'
import type { GridItemProps } from './src/grid-item'

export const FRow = withInstall(Row)
export const FCol = withInstall(Col)
export const FGrid = withInstall(Grid)
export const FGridItem = withInstall(GridItem)

export type { RowProps, ColProps, GridProps, GridItemProps }

export default {
  FRow,
  FCol,
  FGrid,
  FGridItem,
}
