import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  menuListContainer: {
    maxWidth: '100%',
  },
  menuListItemsContainer: {
    padding: '0.5rem 1.75rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}))

const MenuList = props => {
  const { Icon, title, listItems } = props

  const classes = useStyles()

  return (
    <div className={classes.menuListContainer}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Icon color="primary" fontSize="small" />
        </Grid>
        <Grid item>
          <Typography color="primary" variant="h5">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.menuListItemsContainer}>
        {listItems.map(listItem => (
          <Grid key={listItem} item>
            {listItem}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MenuList
