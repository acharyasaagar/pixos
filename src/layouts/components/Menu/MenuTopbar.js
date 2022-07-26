import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Logo from '../Logo'

const MenuTopbar = (props) => {
  const { closeDrawer } = props
  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <IconButton onClick={closeDrawer} color="primary">
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default MenuTopbar
