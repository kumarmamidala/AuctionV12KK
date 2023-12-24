import React from 'react'
import ExploreCard from '../components/ExploreCard/ExploreCard'
import { DataAuctionAppraisalsQuestions } from '../components/FAQs/Data'
import Questions from '../components/FAQs/Questions'
import Featured from '../components/Featured/Featured'
import TransferSearch from '../components/SearchTransfer/TransferSearch/TransferSearch'
import TopBar from '../components/TopBar'

import { DataAuctionAppraisalsWelcomeBanner } from '../components/WelcomeBanner/Data'
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner'
import Footerr from '../components/Footerr/Footerr'

function AuctionAppraisals() {
  return (
    <div>
      <TopBar />
      <ExploreCard />
      <TransferSearch />
      <WelcomeBanner data={DataAuctionAppraisalsWelcomeBanner} />
      <Featured />
      <Questions data={DataAuctionAppraisalsQuestions} />
      <Footerr />
    </div>
  )
}

export default AuctionAppraisals
