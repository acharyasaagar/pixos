import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { PixosLogo } from '../../icons/index'

const useStyles = makeStyles(theme => ({
  logo: {
    width: '100px',
    height: '44px',
  },
}))

const Logo = () => {
  const classes = useStyles()
  return <PixosLogo className={classes.logo} />
}

export default Logo
