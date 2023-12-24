import React from 'react'
import FancyCards from '../components/FancyCards/FancyCards'
import { DataPostQuestions } from '../components/FAQs/Data'
import Questions from '../components/FAQs/Questions'
import SellIntro from '../components/SellIntro/SellIntro'
import StepsLine from '../components/StepsLine/StepsLine'
import TopBar from '../components/TopBar'
import Footerr from '../components/Footerr/Footerr'

function ListaDomain() {
  return (
    <div>
      <TopBar />
      <SellIntro />
      <StepsLine />
      <FancyCards />
      <Questions data={DataPostQuestions} />
      <Footerr />
    </div>
  )
}

export default ListaDomain
