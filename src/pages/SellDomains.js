import React from 'react'
import FancyCards from '../components/FancyCards/FancyCards'
import { DataSellDomainsQuestions } from '../components/FAQs/Data'
import Questions from '../components/FAQs/Questions'
import TopBar from '../components/TopBar'
import Footerr from '../components/Footerr/Footerr'

function SellDomains() {
  return (
    <div>
      {' '}
      <TopBar />
      <FancyCards />
      <Questions data={DataSellDomainsQuestions} />
      <Footerr />
    </div>
  )
}

export default SellDomains
