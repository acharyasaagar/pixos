import React, { useState } from 'react'

import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import Menu from './Menu'

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div>
      <IconButton color="primary" onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={drawerOpen} onClose={closeDrawer}>
        <Menu closeDrawer={closeDrawer} />
      </Drawer>
    </div>
  )
}

export default MenuDrawer
