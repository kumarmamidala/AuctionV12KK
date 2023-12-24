import React from 'react'
import { Events } from '../components/Events/EventContainer'
import GoldDomain from '../components/GoldDomain/GoldDomain'
import { Menu } from '../components/Menu/Menu'
import { Photos } from '../components/PhotosPage/Photos'
import { Reserve } from '../components/Reserve/Reserve'
import { Rooms } from '../components/Rooms/Rooms'
import TopBar from '../components/TopBar'
import { Welcome } from '../components/Welcome/Welcome'
import Footerr from '../components/Footerr/Footerr'

function Gold() {
  return (
    <div>
      <TopBar />
      <GoldDomain />
      <Welcome />
      {/* <Rooms /> */}
      {/* <Photos /> */}

      <Events />
      <Menu />
      {/* <Reserve /> */}
      <Footerr />
    </div>
  )
}

export default Gold
