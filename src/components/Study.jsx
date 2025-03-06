import React from 'react'
import { Layout } from '../LayoutCards/Layout'
import { MainContext } from '../Context/MainContext'
import { useContext } from 'react'
import iconStudy from '../../images/icon-study.svg'

export const Study = () => {
  const {data, selectedPeriod} = useContext(MainContext)
  const studyData = data[2]?.timeframes[selectedPeriod]
  if(!studyData) return null
  return (
    <Layout
      title="Study"
      colorBar="bg-LightRedStudy"
      icon={iconStudy}
      current={studyData.current}
      previous={studyData.previous}
      period={selectedPeriod}>

    </Layout>
  )
}
