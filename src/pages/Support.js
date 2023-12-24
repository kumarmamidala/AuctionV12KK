import React from 'react'
import { DataSupportQuestions } from '../components/FAQs/Data'
import Questions from '../components/FAQs/Questions'
import Help from '../components/Help/Help'
import TopBar from '../components/TopBar'
import Footerr from '../components/Footerr/Footerr'

function Support() {
  return (
    <div>
      <TopBar />
      <Help />
      <Questions data={DataSupportQuestions} />
      <Footerr />
    </div>
  )
}

export default Support
