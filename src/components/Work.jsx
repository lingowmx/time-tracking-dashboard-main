import React from 'react'
import { useContext } from 'react'
import { Layout } from '../LayoutCards/Layout'
import { MainContext } from '../Context/MainContext'
import workIcon from "../../images/icon-work.svg"

export const Work = () => {
  const {data, selectedPeriod} = useContext(MainContext)
  const workData = data[0]?.timeframes[selectedPeriod]
  if(!workData) return null 
  return (
    <Layout
      title="Work"
      colorBar="bg-LightRedWork"
      icon={workIcon}
      current={workData.current}
      previous={workData.previous}
      period={selectedPeriod}>
    </Layout>
  )
}
