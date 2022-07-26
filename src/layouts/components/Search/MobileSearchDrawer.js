import React, { useState } from 'react'

import Drawer from '@material-ui/core/Drawer'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import IconButton from '@material-ui/core/IconButton'

import MobileSearchBar from './MobileSearchBar'

const MobileSearchDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <div>
      <IconButton color="primary" onClick={openDrawer}>
        <SearchRoundedIcon />
      </IconButton>
      <Drawer anchor="top" open={drawerOpen} onClose={closeDrawer}>
        <MobileSearchBar closeDrawer={closeDrawer} />
      </Drawer>
    </div>
  )
}

export default MobileSearchDrawer
