import React, { useState } from 'react'
import Menu from './Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { useLocation } from 'react-router-dom'

const MenuDrawer = () => {
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  React.useEffect(() => {
    if (drawerOpen) closeDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
