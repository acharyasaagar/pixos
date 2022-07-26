import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  logo: {
    width: '100px',
    height: '44px',
  },
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <div>
      <img className={classes.logo} src="/static/pixos.svg" alt="Pixos Logo" />
    </div>
  )
}

export default Logo
