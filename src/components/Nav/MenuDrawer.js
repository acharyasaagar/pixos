import React, { useState } from 'react'

import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import { Container, IconButton } from '@material-ui/core'

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div>
      <IconButton color="primary" variant="contained" onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawerOpen} onClose={closeDrawer}>
        <Container>{/* <MoviesMenu /> */} MOvies</Container>
      </Drawer>
    </div>
  )
}

export default MenuDrawer
