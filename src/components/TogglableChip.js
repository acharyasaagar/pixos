import React from 'react'

import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  'MuiChip-root__left': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  'MuiChip-root__right': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
})

const TogglalbeChip = props => {
  const { leftChipProps, rightChipProps } = props
  const classes = useStyles()
  return (
    <div>
      <Chip className={classes['MuiChip-root__left']} {...leftChipProps} />
      <Chip className={classes['MuiChip-root__right']} {...rightChipProps} />
    </div>
  )
}

export default TogglalbeChip
